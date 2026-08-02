/* ============================================================ *
 *  codestrux.tech — terminal interactions (vanilla, no deps)
 *  Progressive enhancement: the site is fully navigable with this
 *  file absent. Everything here is additive.
 *
 *    1. Theme toggle      — persists to localStorage (no-FOUC script
 *                           in <head> reads it back before first paint).
 *    2. Boot / typewriter — one tasteful reveal, gated by
 *                           prefers-reduced-motion.
 *    3. Command palette   — ⌘K / Ctrl-K / "/" launcher with a bounded
 *                           command set + a small toy mini-shell.
 *                           Focus-trapped, Esc-closable, ARIA-wired,
 *                           restores focus on close. Real <nav> remains
 *                           the primary path; the palette is a shortcut.
 * ============================================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'codestrux-theme';
  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Theme toggle ---------- */
  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }
  function toggleTheme() {
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-theme-toggle]'), function (btn) {
    btn.addEventListener('click', toggleTheme);
  });

  /* ---------- 2. Boot / typewriter reveal ---------- */
  function runBoot() {
    if (reduceMotion) {
      root.classList.remove('boot');
      var s = document.querySelector('[data-boot-status]');
      if (s) { s.textContent = s.getAttribute('data-ready') || s.textContent; }
      return;
    }
    // Pane-in is pure CSS (animation gated on html.boot). Drop the class
    // after the cascade finishes so re-flows (theme toggle) don't re-trigger.
    window.setTimeout(function () { root.classList.remove('boot'); }, 1300);

    // Typewriter the hero command, then any boot status line.
    Array.prototype.forEach.call(document.querySelectorAll('[data-typewriter]'), function (el) {
      var full = el.getAttribute('data-typewriter-text') || el.textContent;
      var i = 0;
      el.textContent = '';
      (function tick() {
        if (i <= full.length) {
          el.textContent = full.slice(0, i);
          i++;
          window.setTimeout(tick, 55 + Math.random() * 45);
        }
      })();
    });
  }
  if (document.readyState !== 'loading') { runBoot(); }
  else { document.addEventListener('DOMContentLoaded', runBoot); }

  /* ---------- 3. Command palette + mini-shell ---------- */
  var paletteEl = document.getElementById('command-palette');
  var dataEl = document.getElementById('palette-commands');
  if (!paletteEl || !dataEl) { return; }

  var data;
  try { data = JSON.parse(dataEl.textContent); } catch (e) { return; }
  var navItems = data.items || [];
  var S = data.strings || {};

  var inputEl = document.getElementById('palette-input');
  var listEl = document.getElementById('palette-list');
  var dialogEl = paletteEl.querySelector('.palette__dialog');
  var lastFocused = null;
  var selected = 0;
  var outputEl = null;

  // Bounded command catalog. Each entry: {id, cmd, label, icon, run|href}.
  function navCommand(item) {
    return { id: item.key, cmd: item.cmd, label: item.label, icon: item.icon, href: item.href };
  }
  var BUILTINS = [
    { id: 'help',    cmd: S.help || 'help',   label: S.helpTitle || 'help', icon: '?', run: showHelp },
    { id: 'theme',   cmd: S.theme || 'theme', label: '', icon: '◐', run: function () { toggleTheme(); echo((S.theme || 'theme') + ' → ' + (currentTheme() === 'dark' ? (S.themeDark || 'dark') : (S.themeLight || 'light'))); } },
    { id: 'stratos', cmd: S.stratos || 'open stratos', label: 'stratos.talk', icon: '↗', href: S.stratosHref },
    { id: 'paramo',  cmd: S.paramo || 'open paramo', label: 'paramo.codestrux.tech', icon: '↗', href: S.paramoHref },
    { id: 'contact', cmd: S.contact || 'contact', label: 'email', icon: '@', href: S.contactHref },
    { id: 'clear',   cmd: S.clear || 'clear', label: '', icon: '⌫', run: function () { clearOutput(); inputEl.value = ''; render(''); } }
  ];
  function allCommands() {
    return navItems.map(navCommand).concat(BUILTINS);
  }

  // Match: prefix on cmd/id/label, plus "cd <key>" and "ls"/"cat" aliases.
  function filter(q) {
    q = (q || '').trim().toLowerCase();
    var all = allCommands();
    if (!q) { return all; }
    // explicit `cd <page>`
    var cd = q.match(/^cd\s+(.+)$/);
    if (cd) {
      var target = cd[1].replace(/[~/]/g, '').trim() || 'home';
      return navItems.filter(function (i) { return i.key.indexOf(target) === 0 || target === '~'; }).map(navCommand);
    }
    if (q === 'ls') { return navItems.map(navCommand); }
    return all.filter(function (c) {
      return c.cmd.toLowerCase().indexOf(q) !== -1 ||
             c.id.toLowerCase().indexOf(q) !== -1 ||
             (c.label && c.label.toLowerCase().indexOf(q) !== -1);
    });
  }

  function render(q) {
    var matches = filter(q);
    listEl.innerHTML = '';
    selected = 0;
    if (!matches.length) {
      var empty = document.createElement('li');
      empty.className = 'palette__empty';
      empty.textContent = S.empty || 'No matching command.';
      listEl.appendChild(empty);
      listEl._matches = [];
      inputEl.removeAttribute('aria-activedescendant');
      return;
    }
    matches.forEach(function (c, idx) {
      var li = document.createElement('li');
      li.className = 'palette__item';
      li.setAttribute('role', 'option');
      li.setAttribute('id', 'palette-opt-' + idx);
      li.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      li.dataset.idx = String(idx);
      var ic = document.createElement('span'); ic.className = 'pi-icon'; ic.textContent = c.icon || '›';
      var cmd = document.createElement('span'); cmd.className = 'pi-cmd'; cmd.textContent = c.cmd;
      li.appendChild(ic); li.appendChild(cmd);
      if (c.label) { var lb = document.createElement('span'); lb.className = 'pi-label'; lb.textContent = c.label; li.appendChild(lb); }
      li.addEventListener('click', function () { execute(c); });
      li.addEventListener('mousemove', function () { setSelected(idx); });
      listEl.appendChild(li);
    });
    listEl._matches = matches;
    // Announce the default selection to AT immediately (not only after arrow keys).
    inputEl.setAttribute('aria-activedescendant', 'palette-opt-0');
  }

  function setSelected(idx) {
    var items = listEl.querySelectorAll('.palette__item');
    if (!items.length) { return; }
    selected = (idx + items.length) % items.length;
    items.forEach(function (el, i) { el.setAttribute('aria-selected', i === selected ? 'true' : 'false'); });
    inputEl.setAttribute('aria-activedescendant', 'palette-opt-' + selected);
    items[selected].scrollIntoView({ block: 'nearest' });
  }

  function echo(text) {
    if (!outputEl) {
      outputEl = document.createElement('div');
      outputEl.className = 'palette__output';
      dialogEl.querySelector('.palette__list').after(outputEl);
    }
    // Build with DOM nodes (no innerHTML) so output text is always inert.
    outputEl.textContent = '';
    var ok = document.createElement('span');
    ok.className = 'ok';
    ok.textContent = '✓ ';
    outputEl.appendChild(ok);
    outputEl.appendChild(document.createTextNode(String(text)));
  }
  function clearOutput() { if (outputEl) { outputEl.remove(); outputEl = null; } }

  function showHelp() {
    var lines = allCommands().map(function (c) { return c.cmd; }).join('   ');
    echo((S.helpTitle || 'commands') + ':  ' + lines);
  }

  function execute(c) {
    if (!c) { return; }
    if (typeof c.run === 'function') { c.run(); return; }
    if (c.href) {
      if (/^https?:/.test(c.href)) { window.open(c.href, '_blank', 'noopener'); }
      else { window.location.href = c.href; }
      close();
    }
  }

  // Run whatever is typed when Enter is pressed with no list selection match.
  function runTyped() {
    var matches = listEl._matches || [];
    if (matches.length) { execute(matches[selected] || matches[0]); return; }
    var q = inputEl.value.trim().toLowerCase();
    if (q === 'help') { showHelp(); }
    else if (q === 'clear') { clearOutput(); inputEl.value = ''; render(''); }
    else { echo((S.empty || 'No matching command.')); }
  }

  /* ---- open / close with focus management ---- */
  function open(prefill) {
    if (!paletteEl.hidden) { return; }
    lastFocused = document.activeElement;
    paletteEl.hidden = false;
    document.body.style.overflow = 'hidden';
    inputEl.value = prefill || '';
    clearOutput();
    render(inputEl.value);
    window.requestAnimationFrame(function () { inputEl.focus(); });
  }
  function close() {
    if (paletteEl.hidden) { return; }
    paletteEl.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') { lastFocused.focus(); }
  }

  // Triggers (real buttons in the header).
  Array.prototype.forEach.call(document.querySelectorAll('[data-palette-open]'), function (btn) {
    btn.addEventListener('click', function () { open(); });
  });
  Array.prototype.forEach.call(paletteEl.querySelectorAll('[data-palette-close]'), function (el) {
    el.addEventListener('click', close);
  });

  // Global keyboard: ⌘K / Ctrl-K opens; "/" opens when not already typing.
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault(); paletteEl.hidden ? open() : close(); return;
    }
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if (e.key === '/' && paletteEl.hidden && !typing) { e.preventDefault(); open(); }
  });

  // In-palette keyboard.
  inputEl.addEventListener('input', function () { clearOutput(); render(inputEl.value); });
  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(selected + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(selected - 1); }
    else if (e.key === 'Enter') { e.preventDefault(); runTyped(); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') {
      // Focus trap: keep focus on the input (the only interactive control in flow).
      e.preventDefault();
    }
  });
  // Clicking the dialog chrome keeps focus inside.
  dialogEl.addEventListener('mousedown', function (e) { if (e.target !== inputEl) { e.preventDefault(); inputEl.focus(); } });
})();

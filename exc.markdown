---
layout: page
title: "exc — the everything menu for your terminal"
description: "exc is a searchable, keyboard-driven command picker for the terminal: one TOML file of commands, profiles, and parameters, a live host-info header, and a safe-Rust core. cargo install exc-launcher."
lang: en
ref: exc
alt_url: /es/exc/
permalink: /exc/
---

<section class="pane pane--col-4" aria-label="exc — the everything menu for your terminal">
  <div class="pane__bar"><span class="pane__path">~/exc</span><span class="pane__status">v0.6.0 · MIT</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">exc</span></p>
    <h1 class="hero__heading">The <span class="hl">everything menu</span> for your terminal.</h1>
    <p class="hero__sub">One TOML file of commands, profiles, and parameters — served through a searchable, keyboard-driven picker with a live host-info header. Written in Rust; installs as a single binary named <code>exc</code>.</p>
    <p class="hero__cta">
      <a class="btn" href="https://crates.io/crates/exc-launcher" rel="noopener">cargo install exc-launcher</a>
      <a class="btn btn--ghost" href="https://github.com/codestrux/exc-launcher" rel="noopener">github</a>
    </p>
    <figure class="shot shot--hero">
      <img src="/assets/img/exc/picker.png" alt="The exc picker: a numbered command grid under a host-info header" width="2400" height="1500" fetchpriority="high" decoding="async" />
      <figcaption>the picker — numbered grid, profiles, host header</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--col-4" aria-label="exc demo">
  <div class="pane__bar"><span class="pane__path">exc/demo</span><span class="pane__status">demo.webm</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <figure class="shot">
      <video data-autoplay muted loop playsinline controls preload="metadata" poster="/assets/img/exc/demo-poster.png" width="2400" height="1500" aria-label="exc demo: filter, navigate, answer a parameter prompt, run">
        <source src="/assets/img/exc/demo.webm" type="video/webm" />
        <source src="/assets/img/exc/demo.mp4" type="video/mp4" />
      </video>
      <figcaption>live filter, digit jump, parameter prompt, run — one round trip</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--col-2" aria-label="The picker">
  <div class="pane__bar"><span class="pane__path">exc/picker</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> exc</h2>
    <p>Type to filter — a live regex with substring fallback — over a column-major numbered grid, laid out like <code>ls</code>. Type a number to jump straight to item N; the prompt glyph flips to <code>#</code> while you do.</p>
    <ul aria-label="Picker keys">
      <li><kbd>Enter</kbd> run · <kbd>Esc</kbd> quit</li>
      <li><kbd>Tab</kbd> / <kbd>Shift-Tab</kbd> switch profile</li>
      <li><kbd>Ctrl-H</kbd> <kbd>Ctrl-J</kbd> <kbd>Ctrl-K</kbd> <kbd>Ctrl-L</kbd> move — vim chords; bare letters stay filter input, the same trade-off fzf makes</li>
    </ul>
    <figure class="shot">
      <img src="/assets/img/exc/filter.png" alt="The picker narrowing the grid with a live regex filter" width="2400" height="1500" loading="lazy" decoding="async" />
      <figcaption>regex filter, substring fallback</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Configuration and parameters">
  <div class="pane__bar"><span class="pane__path">exc/config</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> exc <span class="arg">init</span></h2>
    <p>Everything lives in <code>~/.config/exc/config.toml</code>: profiles group commands, and {% raw %}<code>{{param}}</code>{% endraw %} placeholders prompt at run time — with defaults, and <code>secret = true</code> for masked input. Commands run through <code>sh -c</code> with inherited stdio, so ssh, fzf, and sudo behave; project-local configs load with <code>--config</code>.</p>
    <pre><code>{% raw %}[[profiles]]
name = "network"
label = "Network"

  [[profiles.commands]]
  name = "cert-check"
  description = "Check the TLS certificate for a domain"
  command = "openssl s_client -connect {{domain}}:443"

    [[profiles.commands.params]]
    name = "domain"
    prompt = "Domain to check"
    secret = false{% endraw %}</code></pre>
    <figure class="shot">
      <img src="/assets/img/exc/param-prompt.png" alt="A parameter prompt with masked secret input" width="2400" height="800" loading="lazy" decoding="async" />
      <figcaption>prompted params — secret = true masks input</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--col-2" aria-label="System info panel">
  <div class="pane__bar"><span class="pane__path">exc/sysinfo</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> exc <span class="arg">sysinfo</span></h2>
    <p>A host panel in three cost tiers: what is cheap reads synchronously at startup — OS, kernel, uptime, memory, disk, CPU, load, local IP, battery, top processes, GPU. What is slow — public IP, package updates, net throughput — refreshes in the background and patches in without blocking. Underneath, per-platform native APIs: sysctl and IOKit on macOS, /proc and /sys on Linux, kernel32 and PowerShell CIM on Windows.</p>
    <figure class="shot">
      <img src="/assets/img/exc/sysinfo.png" alt="The sysinfo panel: host, memory, disk, CPU, network" width="2400" height="1200" loading="lazy" decoding="async" />
      <figcaption>three tiers — sync, background, native</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--feature pane--col-2" aria-label="Rust safety">
  <div class="pane__bar"><span class="pane__path">exc/src</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> grep <span class="flag">-rl</span> <span class="arg">unsafe</span> src/</h2>
    <pre><code>src/hostinfo/platform/macos.rs
src/hostinfo/platform/linux.rs
src/hostinfo/platform/windows.rs
src/hostinfo/platform/macos/iokit_ffi.rs</code></pre>
    <p>That is the whole list. The picker, executor, config, and theme layers are safe Rust: ownership and borrowing rule out use-after-free, double-free, and data races at compile time, with no garbage collector at run time. <code>unsafe</code> exists — confined to the OS FFI in the hostinfo platform layer, where the kernel's API leaves no choice. A panic hook leaves the alternate screen and re-enables the terminal, so even a crash cannot wedge your session; errors are typed with thiserror.</p>
    <ul class="tags" aria-label="Safety properties">
      <li>safe-Rust core</li><li>FFI-confined unsafe</li><li>no GC</li><li>panic-safe terminal restore</li><li>thiserror</li>
    </ul>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Theming">
  <div class="pane__bar"><span class="pane__path">exc/themes</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> theme <span class="arg">nord</span></h2>
    <p>Built-in default, dark, and mono themes, an inline <code>[theme]</code> table or a <code>theme_file</code>, and ten bundled palettes. Six fields — accent, border, text, muted, selected background and foreground — and <code>NO_COLOR</code> is respected.</p>
    <ul class="tags" aria-label="Bundled palettes">
      <li>solarized-dark</li><li>solarized-light</li><li>dracula</li><li>nord</li><li>gruvbox-dark</li><li>one-dark</li><li>monokai</li><li>tomorrow-night</li><li>homebrew</li><li>ayu-dark</li>
    </ul>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Command line">
  <div class="pane__bar"><span class="pane__path">exc/cli</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> exc <span class="arg">man</span></h2>
    <p>Bare <code>exc</code> opens the picker; <code>exc &lt;name&gt;</code> runs the first substring match. Subcommands cover the rest — and <code>exc man</code> renders roff from the same clap definitions as <code>--help</code>, so the man page cannot drift from the binary.</p>
    <ul aria-label="Subcommands">
      <li><code>exc run</code> · <code>exc list</code> · <code>exc sysinfo</code></li>
      <li><code>exc validate --strict --format json</code></li>
      <li><code>exc init</code> · <code>exc man</code></li>
    </ul>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Install exc">
  <div class="pane__bar"><span class="pane__path">~/exc/install</span><span class="pane__status">crates.io</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> cargo install <span class="arg">exc-launcher</span></h2>
    <p>Rust 1.95 or newer, edition 2024, MIT licensed. No Rust toolchain on the box? <code>launcher.sh</code> in the repo is a dependency-free bash fallback. The <code>EXAMPLES.md</code> cookbook covers profiles, parameters, and themes.</p>
    <p class="card-meta">author: aao@codestrux.tech</p>
    <p class="hero__cta">
      <a class="btn" href="https://crates.io/crates/exc-launcher" rel="noopener">cargo install exc-launcher</a>
      <a class="btn btn--ghost" href="https://github.com/codestrux/exc-launcher" rel="noopener">github</a>
      <a class="btn btn--ghost" href="https://github.com/codestrux/exc-launcher/blob/main/EXAMPLES.md" rel="noopener">EXAMPLES.md</a>
    </p>
  </div>
</section>

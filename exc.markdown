---
layout: page
title: "exc: the everything menu for your terminal"
description: "exc is a searchable command picker for the terminal that you drive with the keyboard: one TOML file of commands, profiles, and parameters, a live host-info header, and a safe-Rust core. cargo install exc-launcher."
lang: en
ref: exc
alt_url: /es/exc/
permalink: /exc/
---

<section class="band band--hero">
  <div class="wrap">
    <p class="eyebrow">exc · v0.9.1 · MIT</p>
    <h1 class="hero__heading">The <span class="hl">everything menu</span> for your terminal.</h1>
    <p class="hero__sub">One TOML file holds your commands, profiles, and parameters. exc shows them in a searchable picker that you drive with the keyboard, below a live host-info header. exc is written in Rust and installs as one binary named <code>exc</code>.</p>
    <p class="hero__cta">
      <a class="btn btn--mono" href="https://crates.io/crates/exc-launcher" rel="noopener">cargo install exc-launcher</a>
      <a class="btn btn--ghost" href="https://github.com/codestrux/exc-launcher" rel="noopener">GitHub</a>
    </p>
    <figure class="shot shot--hero">
      <img src="/assets/img/exc/picker.png" alt="The exc picker: a numbered command grid under a host-info header" width="2400" height="1500" fetchpriority="high" decoding="async" />
      <figcaption>The picker: numbered grid, profiles, and host header</figcaption>
    </figure>
  </div>
</section>

<section class="band band--alt">
  <div class="wrap">
    <figure class="shot">
      <video data-autoplay muted loop playsinline controls preload="metadata" poster="/assets/img/exc/demo-poster.png" width="2400" height="1500" aria-label="exc demo: filter, navigate, answer a parameter prompt, run">
        <source src="/assets/img/exc/demo.webm" type="video/webm" />
        <source src="/assets/img/exc/demo.mp4" type="video/mp4" />
      </video>
      <figcaption>Live filter, jump by number, parameter prompt, and run</figcaption>
    </figure>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="cards cards--2">
      <article class="card">
        <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">exc</span></p>
        <h3>The picker</h3>
        <p>Type to filter the commands. The filter is a live regular expression. If the expression is not valid, exc searches for the text. The commands are in a numbered grid, in columns, as in <code>ls</code>. Type a number to go to that item. While you type a number, the prompt symbol changes to <code>#</code>.</p>
        <ul aria-label="Picker keys">
          <li><kbd>Enter</kbd> runs the command. <kbd>Esc</kbd> quits.</li>
          <li><kbd>Tab</kbd> and <kbd>Shift-Tab</kbd> change the profile.</li>
          <li><kbd>Ctrl-H</kbd> <kbd>Ctrl-J</kbd> <kbd>Ctrl-K</kbd> <kbd>Ctrl-L</kbd> move the selection, as in vim. Letters without <kbd>Ctrl</kbd> go to the filter, as in fzf.</li>
        </ul>
        <figure class="shot">
          <img src="/assets/img/exc/filter.png" alt="The picker narrowing the grid with a live regex filter" width="2400" height="1500" loading="lazy" decoding="async" />
          <figcaption>Filter with a regular expression</figcaption>
        </figure>
      </article>
      <article class="card">
        <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">exc init</span></p>
        <h3>Configuration and parameters</h3>
        <p>All the configuration is in <code>~/.config/exc/config.toml</code>. Profiles group the commands. A {% raw %}<code>{{param}}</code>{% endraw %} placeholder makes exc ask for a value when the command runs. A parameter can have a default value. With <code>secret = true</code>, exc hides the input. Commands run through <code>sh -c</code> with the terminal attached, so ssh, fzf, and sudo operate correctly. To load the configuration of a project, use <code>--config</code>.</p>
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
          <figcaption>Parameter prompt. With secret = true, exc hides the input.</figcaption>
        </figure>
      </article>
    </div>
  </div>
</section>

<section class="band band--alt">
  <div class="wrap">
    <div class="cards cards--2">
      <article class="card">
        <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">exc sysinfo</span></p>
        <h3>System info panel</h3>
        <p>The host panel reads data in three groups.</p>
        <ul>
          <li><strong>At startup:</strong> data that is fast to read. This is the operating system, kernel, uptime, memory, disk, CPU, load, local IP address, battery, top processes, and GPU.</li>
          <li><strong>In the background:</strong> data that is slow to read. This is the public IP address, package updates, and network throughput. The panel shows this data when it arrives and does not block.</li>
          <li><strong>Native APIs for each platform:</strong> sysctl and IOKit on macOS, /proc and /sys on Linux, kernel32 and PowerShell CIM on Windows.</li>
        </ul>
        <figure class="shot">
          <img src="/assets/img/exc/sysinfo.png" alt="The sysinfo panel: host, memory, disk, CPU, network" width="2400" height="1200" loading="lazy" decoding="async" />
          <figcaption>The sysinfo panel</figcaption>
        </figure>
      </article>
      <article class="card">
        <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">grep -rl unsafe src/</span></p>
        <h3>Safe Rust</h3>
        <pre><code>src/hostinfo/platform/macos.rs
        src/hostinfo/platform/linux.rs
        src/hostinfo/platform/windows.rs
        src/hostinfo/platform/macos/iokit_ffi.rs</code></pre>
        <p>That is the full list of files with <code>unsafe</code> code. The picker, the executor, the configuration, and the themes are safe Rust. The compiler prevents use-after-free, double-free, and data races, and there is no garbage collector. <code>unsafe</code> code is only in the calls to the operating system in the host-info layer, where the API of the kernel makes it necessary.</p>
        <p>If exc fails, a panic hook restores the terminal, so a failure cannot block your session. Errors have types from thiserror.</p>
        <ul class="tags" aria-label="Safety properties">
          <li>safe-Rust core</li><li>unsafe only in OS calls</li><li>no garbage collector</li><li>terminal restored after a panic</li><li>thiserror</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="cards cards--2">
      <article class="card">
        <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">theme nord</span></p>
        <h3>Themes</h3>
        <p>exc has three built-in themes: default, dark, and mono. You can also write a <code>[theme]</code> table in the configuration, or point to a <code>theme_file</code>. Ten palettes come with exc. A theme has six fields: accent, border, text, muted, selected background, and selected foreground. exc obeys the <code>NO_COLOR</code> variable.</p>
        <ul class="tags" aria-label="Bundled palettes">
          <li>solarized-dark</li><li>solarized-light</li><li>dracula</li><li>nord</li><li>gruvbox-dark</li><li>one-dark</li><li>monokai</li><li>tomorrow-night</li><li>homebrew</li><li>ayu-dark</li>
        </ul>
      </article>
      <article class="card">
        <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">exc man</span></p>
        <h3>Command line</h3>
        <p><code>exc</code> without arguments opens the picker. <code>exc &lt;name&gt;</code> runs the first command whose name contains that text. <code>exc man</code> writes the man page from the same definitions as <code>--help</code>, so the man page always agrees with the binary.</p>
        <ul aria-label="Subcommands">
          <li><code>exc run</code> · <code>exc list</code> · <code>exc sysinfo</code></li>
          <li><code>exc validate --strict --format json</code></li>
          <li><code>exc init</code> · <code>exc man</code></li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="band band--alt">
  <div class="wrap">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">cargo install exc-launcher</span></p>
    <h2>Install exc</h2>
    <p>exc needs Rust 1.95 or newer (edition 2024). The license is MIT. If the computer has no Rust toolchain, use <code>launcher.sh</code> from the repository. It is a bash script with no dependencies. The <code>EXAMPLES.md</code> file has examples of profiles, parameters, and themes.</p>
    <p class="card-meta">Author: aao@codestrux.tech</p>
    <p class="hero__cta">
      <a class="btn btn--mono" href="https://crates.io/crates/exc-launcher" rel="noopener">cargo install exc-launcher</a>
      <a class="btn btn--ghost" href="https://github.com/codestrux/exc-launcher" rel="noopener">GitHub</a>
      <a class="btn btn--ghost btn--mono" href="https://github.com/codestrux/exc-launcher/blob/main/EXAMPLES.md" rel="noopener">EXAMPLES.md</a>
    </p>
  </div>
</section>

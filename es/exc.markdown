---
layout: page
title: "exc — el menú de todo para su terminal"
description: "exc es un selector de comandos buscable y manejado por teclado para la terminal: un archivo TOML con comandos, perfiles y parámetros, un encabezado con información del host y un núcleo en Rust seguro. cargo install exc-launcher."
lang: es-CR
ref: exc
alt_url: /exc/
permalink: /es/exc/
---

<section class="pane pane--col-4" aria-label="exc — el menú de todo para su terminal">
  <div class="pane__bar"><span class="pane__path">~/exc</span><span class="pane__status">v0.6.0 · MIT</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">exc</span></p>
    <h1 class="hero__heading">El <span class="hl">menú de todo</span> para su terminal.</h1>
    <p class="hero__sub">Un solo archivo TOML con comandos, perfiles y parámetros — servido en un selector buscable y manejado por teclado, con un encabezado de información del host en vivo. Escrito en Rust; se instala como un único binario llamado <code>exc</code>.</p>
    <p class="hero__cta">
      <a class="btn" href="https://crates.io/crates/exc-launcher" rel="noopener">cargo install exc-launcher</a>
      <a class="btn btn--ghost" href="https://github.com/codestrux/codestrux-exc-launcher" rel="noopener">github</a>
    </p>
    <figure class="shot shot--hero">
      <img src="/assets/img/exc/picker.png" alt="El selector de exc: una cuadrícula numerada de comandos bajo un encabezado con información del host" width="2400" height="1500" fetchpriority="high" decoding="async" />
      <figcaption>el selector — cuadrícula numerada, perfiles, encabezado del host</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Demostración de exc">
  <div class="pane__bar"><span class="pane__path">exc/demo</span><span class="pane__status">demo.webm</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <figure class="shot">
      <video data-autoplay muted loop playsinline controls preload="metadata" poster="/assets/img/exc/demo-poster.png" width="2400" height="1500" aria-label="Demostración de exc: filtrar, navegar, responder un prompt de parámetro, ejecutar">
        <source src="/assets/img/exc/demo.webm" type="video/webm" />
        <source src="/assets/img/exc/demo.mp4" type="video/mp4" />
      </video>
      <figcaption>filtro en vivo, salto por número, prompt de parámetro, ejecución — un ciclo completo</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--col-2" aria-label="El selector">
  <div class="pane__bar"><span class="pane__path">exc/picker</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> exc</h2>
    <p>Escriba para filtrar — una expresión regular en vivo con recurso a subcadena — sobre una cuadrícula numerada por columnas, ordenada como <code>ls</code>. Escriba un número para saltar directo al elemento N; el glifo del prompt cambia a <code>#</code> mientras lo hace.</p>
    <ul aria-label="Teclas del selector">
      <li><kbd>Enter</kbd> ejecuta · <kbd>Esc</kbd> sale</li>
      <li><kbd>Tab</kbd> / <kbd>Shift-Tab</kbd> cambia de perfil</li>
      <li><kbd>Ctrl-H</kbd> <kbd>Ctrl-J</kbd> <kbd>Ctrl-K</kbd> <kbd>Ctrl-L</kbd> mueve el cursor — acordes vim; las letras sueltas siguen siendo filtro, el mismo intercambio que hace fzf</li>
    </ul>
    <figure class="shot">
      <img src="/assets/img/exc/filter.png" alt="El selector reduciendo la cuadrícula con un filtro regex en vivo" width="2400" height="1500" loading="lazy" decoding="async" />
      <figcaption>filtro regex, con recurso a subcadena</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Configuración y parámetros">
  <div class="pane__bar"><span class="pane__path">exc/config</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> exc <span class="arg">init</span></h2>
    <p>Todo vive en <code>~/.config/exc/config.toml</code>: los perfiles agrupan comandos, y los marcadores {% raw %}<code>{{param}}</code>{% endraw %} preguntan al ejecutar — con valores por defecto y <code>secret = true</code> para entrada enmascarada. Los comandos corren por <code>sh -c</code> con stdio heredado, así que ssh, fzf y sudo se comportan; las configuraciones por proyecto se cargan con <code>--config</code>.</p>
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
      <img src="/assets/img/exc/param-prompt.png" alt="Un prompt de parámetro con entrada secreta enmascarada" width="2400" height="800" loading="lazy" decoding="async" />
      <figcaption>parámetros con prompt — secret = true enmascara la entrada</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Panel de información del sistema">
  <div class="pane__bar"><span class="pane__path">exc/sysinfo</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> exc <span class="arg">sysinfo</span></h2>
    <p>Un panel del host en tres niveles de costo: lo barato se lee de forma síncrona al arrancar — OS, kernel, uptime, memoria, disco, CPU, carga, IP local, batería, procesos principales, GPU. Lo lento — IP pública, actualizaciones de paquetes, tráfico de red — se refresca en segundo plano y se integra sin bloquear. Debajo, APIs nativas por plataforma: sysctl e IOKit en macOS, /proc y /sys en Linux, kernel32 y PowerShell CIM en Windows.</p>
    <figure class="shot">
      <img src="/assets/img/exc/sysinfo.png" alt="El panel sysinfo: host, memoria, disco, CPU, red" width="2400" height="1200" loading="lazy" decoding="async" />
      <figcaption>tres niveles — síncrono, en segundo plano, nativo</figcaption>
    </figure>
  </div>
</section>

<section class="pane pane--feature pane--col-2" aria-label="Seguridad de Rust">
  <div class="pane__bar"><span class="pane__path">exc/src</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> grep <span class="flag">-rl</span> <span class="arg">unsafe</span> src/</h2>
    <pre><code>src/hostinfo/platform/macos.rs
src/hostinfo/platform/linux.rs
src/hostinfo/platform/windows.rs
src/hostinfo/platform/macos/iokit_ffi.rs</code></pre>
    <p>Esa es la lista completa. El selector, el ejecutor, la configuración y los temas son Rust seguro: la propiedad y el préstamo descartan use-after-free, double-free y data races en tiempo de compilación, sin recolector de basura en ejecución. <code>unsafe</code> existe — confinado al FFI del sistema operativo en la capa de plataforma de hostinfo, donde la API del kernel no deja alternativa. Un panic hook sale de la pantalla alterna y reactiva la terminal, así que ni un crash puede dejar su sesión colgada; los errores son tipados con thiserror.</p>
    <ul class="tags" aria-label="Propiedades de seguridad">
      <li>núcleo en Rust seguro</li><li>unsafe confinado al FFI</li><li>sin GC</li><li>terminal restaurada ante pánico</li><li>thiserror</li>
    </ul>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Temas">
  <div class="pane__bar"><span class="pane__path">exc/themes</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> theme <span class="arg">nord</span></h2>
    <p>Temas integrados default, dark y mono, una tabla <code>[theme]</code> en línea o un <code>theme_file</code>, y diez paletas incluidas. Seis campos — accent, border, text, muted, fondo y texto de selección — y se respeta <code>NO_COLOR</code>.</p>
    <ul class="tags" aria-label="Paletas incluidas">
      <li>solarized-dark</li><li>solarized-light</li><li>dracula</li><li>nord</li><li>gruvbox-dark</li><li>one-dark</li><li>monokai</li><li>tomorrow-night</li><li>homebrew</li><li>ayu-dark</li>
    </ul>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Línea de comandos">
  <div class="pane__bar"><span class="pane__path">exc/cli</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> exc <span class="arg">man</span></h2>
    <p><code>exc</code> a secas abre el selector; <code>exc &lt;name&gt;</code> ejecuta la primera coincidencia por subcadena. Los subcomandos cubren el resto — y <code>exc man</code> genera el roff desde las mismas definiciones de clap que <code>--help</code>, así que la página man no puede desalinearse del binario.</p>
    <ul aria-label="Subcomandos">
      <li><code>exc run</code> · <code>exc list</code> · <code>exc sysinfo</code></li>
      <li><code>exc validate --strict --format json</code></li>
      <li><code>exc init</code> · <code>exc man</code></li>
    </ul>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Instalar exc">
  <div class="pane__bar"><span class="pane__path">~/exc/install</span><span class="pane__status">crates.io</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> cargo install <span class="arg">exc-launcher</span></h2>
    <p>Rust 1.95 o más reciente, edición 2024, licencia MIT. ¿Sin toolchain de Rust en la máquina? <code>launcher.sh</code> en el repositorio es un fallback en bash sin dependencias. El cookbook <code>EXAMPLES.md</code> cubre perfiles, parámetros y temas.</p>
    <p class="card-meta">author: aao@codestrux.tech</p>
    <p class="hero__cta">
      <a class="btn" href="https://crates.io/crates/exc-launcher" rel="noopener">cargo install exc-launcher</a>
      <a class="btn btn--ghost" href="https://github.com/codestrux/codestrux-exc-launcher" rel="noopener">github</a>
      <a class="btn btn--ghost" href="https://github.com/codestrux/codestrux-exc-launcher/blob/main/EXAMPLES.md" rel="noopener">EXAMPLES.md</a>
    </p>
  </div>
</section>

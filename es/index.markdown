---
layout: home
title: "CodeStrux Tech"
lang: es-CR
ref: home
alt_url: /
permalink: /es/
---

<section class="pane pane--feature pane--col-3 pane--row-2 hero" aria-label="CodeStrux Tech">
  <div class="pane__bar">
    <span class="pane__path">codestrux@cartago:~</span>
    <span class="pane__status" data-boot-status data-ready="listo.">arrancando codestrux.tech …</span>
    <span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span>
  </div>
  <div class="pane__body hero__body">
    {% include codestrux-wordmark.html %}
    <p class="prompt prompt--hero">
      <span class="prompt__sigil" aria-hidden="true">$</span>
      <span class="prompt__cmd" data-typewriter data-typewriter-text="whoami">whoami</span>
      <span class="caret" aria-hidden="true"></span>
    </p>
    <h1 class="hero__heading">Construimos y operamos <span class="hl">infraestructura</span> y <span class="hl">software</span>.</h1>
    <p class="hero__sub">Un estudio desde Cartago, Costa Rica. Desde el servidor Linux y el hipervisor hasta la API, el pipeline de datos, la aplicación web y el agente de IA — lo diseñamos, lo desplegamos y lo mantenemos funcionando.</p>
    <p class="hero__cta">
      <a class="btn" href="/es/projects/">ls projects</a>
      <a class="btn btn--ghost" href="mailto:contact@codestrux.tech">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
    </p>
  </div>
</section>

<section class="pane" aria-label="Infraestructura y Linux">
  <div class="pane__bar"><span class="pane__path">~/infra</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> uname <span class="flag">-a</span></h2>
    <p>Arch, Debian/Ubuntu, FreeBSD, RHEL y Amazon Linux sobre Proxmox VE, KVM y hardware dedicado. Aprovisionamos, endurecemos y operamos las máquinas donde corre nuestro software.</p>
  </div>
</section>

<section class="pane" aria-label="Código abierto">
  <div class="pane__bar"><span class="pane__path">~/oss</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> git remote <span class="flag">-v</span></h2>
    <p>Construimos sobre código abierto y aportamos de vuelta, y publicamos nuestras propias herramientas bajo la organización CodeStrux en GitHub.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Nube, datos y backends">
  <div class="pane__bar"><span class="pane__path">~/stack</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">stack/</span></h2>
    <p>AWS y GCP, serverless y contenedores, pipelines de ETL y BI, y backends en producción en Java (Jakarta EE, Spring Boot) y TypeScript (React, Next.js).</p>
    <ul class="tags" aria-label="Stack">
      <li>AWS</li><li>GCP</li><li>Java</li><li>Spring Boot</li><li>Jakarta EE</li><li>TypeScript</li><li>React</li><li>Next.js</li><li>Docker</li><li>Kubernetes</li>
    </ul>
  </div>
</section>

<section class="pane pane--feature pane--col-2 product-stratos" aria-label="Stratos WhatsApp — producto destacado">
  <div class="pane__bar"><span class="pane__path">~/projects/stratos</span><span class="pane__status">en línea</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">./stratos --status</span></p>
    <div class="product-wordmark">{% include stratos-wordmark.html class="is-lg" %}</div>
    <p>Nuestra propia bandeja de WhatsApp Business en tiempo real para pymes de LATAM: actualizaciones en vivo por SSE, transcripción de notas de voz en español, sugerencias de respuesta con IA y agentes de IA verticales.</p>
    <ul class="tags" aria-label="Capacidades de Stratos">
      <li>agentes de IA</li><li>bandeja SSE</li><li>transcripción de voz</li><li>sugerencias de respuesta</li><li>WhatsApp Flows</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="https://stratos.talk" rel="noopener">open stratos</a> <a class="btn btn--ghost" href="/es/projects/">más proyectos</a></p>
  </div>
</section>

<section class="pane pane--feature pane--col-2 product-exc" aria-label="exc — el menú de todo para su terminal">
  <div class="pane__bar"><span class="pane__path">~/projects/exc</span><span class="pane__status">v0.6.0</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">exc</span></p>
    <h2 class="hero__heading">exc<span class="hl">.</span></h2>
    <p class="card-meta">el menú de todo para su terminal</p>
    <p>Un selector de comandos buscable y manejado por teclado, escrito en Rust: un archivo TOML con comandos, perfiles y parámetros con prompt, y un encabezado de información del host en vivo. Código abierto, MIT.</p>
    <ul class="tags" aria-label="Capacidades de exc">
      <li>Rust</li><li>TUI</li><li>config TOML</li><li>filtro regex</li><li>sysinfo</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="/es/exc/">open exc</a> <a class="btn btn--ghost" href="https://github.com/codestrux/codestrux-exc-launcher" rel="noopener">github</a></p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Trabajemos juntos">
  <div class="pane__bar"><span class="pane__path">~/contact</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> cat <span class="arg">contact.md</span></h2>
    <p>Vea lo que hemos construido en la página de <a href="/es/projects/">proyectos</a>, conozca más <a href="/es/about/">sobre nosotros</a> o explore los <a href="/es/services/">servicios</a> que ofrecemos. ¿Listo para conversar? Escríbanos a <a href="mailto:contact@codestrux.tech">contact@codestrux.tech</a>.</p>
  </div>
</section>

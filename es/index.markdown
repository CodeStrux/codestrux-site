---
layout: home
title: "CodeStrux Tech"
description: "CodeStrux Tech es un estudio en Cartago, Costa Rica. Construimos y operamos infraestructura y software para sistemas confidenciales — IA solo con metadatos, Linux, pipelines de datos, Java, TypeScript, facturación electrónica y WhatsApp."
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
    <p class="hero__sub">Un estudio desde Cartago, Costa Rica. Desde el servidor Linux y el hipervisor hasta la API, el pipeline de datos, la aplicación web y el agente de IA — también sobre sistemas altamente confidenciales. Los agentes ven solo metadatos; las personas aprueban el script; los datos nunca entran al modelo.</p>
    <p class="hero__cta">
      <a class="btn" href="/es/projects/">ls projects</a>
      <a class="btn btn--ghost" href="/es/security/">cat security.md</a>
      <a class="btn btn--ghost" href="mailto:{{ site.author.email }}">contact</a>
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

<section class="pane pane--feature pane--col-2" aria-label="IA confidencial">
  <div class="pane__bar"><span class="pane__path">~/security</span><span class="pane__status">solo metadatos</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">cat security.md</span></p>
    <h2 class="hero__heading">Datos confidenciales. Los agentes no los ven.</h2>
    <p>Abogamos por la seguridad de los datos en sistemas que no se pueden volcar a un modelo de un proveedor. El ciclo es corto:</p>
    <ol>
      <li>Los agentes consumen metadatos — esquemas, formas, volúmenes — y proponen un script de extracción.</li>
      <li>El equipo de CodeStrux Tech revisa ese script con criterio humano.</li>
      <li>El script aprobado corre donde ya viven los datos. Comparamos el extracto. Los agentes siguen sin recibir la carga.</li>
    </ol>
    <p>También hacemos pruebas de seguridad de entornos en el stack que usted opera.</p>
    <p class="hero__cta"><a class="btn" href="/es/security/">cat security.md</a> <a class="btn btn--ghost" href="/es/services/">ls services/</a></p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Nube, datos y backends">
  <div class="pane__bar"><span class="pane__path">~/stack</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">stack/</span></h2>
    <p>AWS, Cloudflare, Azure y GCP; Proxmox y contenedores; pipelines de ETL y BI; backends en producción en Java (Jakarta EE, Spring Boot) y TypeScript (React, Next.js); facturación electrónica de Costa Rica y WhatsApp Business.</p>
    <ul class="tags" aria-label="Stack">
      <li>Proxmox</li><li>AWS</li><li>GCP</li><li>Java</li><li>Spring Boot</li><li>Jakarta EE</li><li>TypeScript</li><li>React</li><li>Next.js</li><li>ETL</li><li>WhatsApp</li><li>FacturaCR</li>
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
    <p class="hero__cta"><a class="btn" href="/es/exc/">open exc</a> <a class="btn btn--ghost" href="https://github.com/codestrux/exc-launcher" rel="noopener">github</a></p>
  </div>
</section>

<section class="pane pane--feature pane--col-2" aria-label="CodeStrux Learn">
  <div class="pane__bar"><span class="pane__path">~/projects/learn</span><span class="pane__status">usdc</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">open learn</span></p>
    <h2 class="hero__heading">Learn</h2>
    <p class="card-meta">sesiones en vivo de código seguro</p>
    <p>Vendemos cursos en sesiones en vivo para que la gente aprenda prácticas de código seguro. Catálogo, cuentas y LMS — se desbloquean con USDC a través de MoonPay Commerce.</p>
    <ul class="tags" aria-label="Capacidades de Learn">
      <li>sesiones en vivo</li><li>código seguro</li><li>USDC</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="https://learn.codestrux.tech" rel="noopener">open learn</a> <a class="btn btn--ghost" href="/es/pay/">cat pay.md</a></p>
  </div>
</section>

<section class="pane pane--feature pane--col-2" aria-label="arayaj.photo">
  <div class="pane__bar"><span class="pane__path">~/projects/photo</span><span class="pane__status">usdc</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">open photo</span></p>
    <h2 class="hero__heading">arayaj.photo</h2>
    <p class="card-meta">portafolio fotográfico</p>
    <p>Un portafolio fotográfico bilingüe: álbumes, cotizaciones y checkout en USDC a través de MoonPay Commerce.</p>
    <ul class="tags" aria-label="Capacidades de arayaj.photo">
      <li>portafolio</li><li>USDC</li><li>MoonPay</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="https://arayaj.photo" rel="noopener">open photo</a> <a class="btn btn--ghost" href="/es/pay/">cat pay.md</a></p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="CodeStrux Socials">
  <div class="pane__bar"><span class="pane__path">~/socials</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">socials/</span></h2>
    <p>CodeStrux Socials — Instagram, GitHub, LinkedIn, WhatsApp.</p>
    <ul>
      <li><a href="https://www.instagram.com/codestrux.tech/" rel="me noopener">instagram.com/codestrux.tech</a></li>
      <li><a href="https://github.com/CodeStrux" rel="me noopener">github.com/CodeStrux</a></li>
      <li><a href="https://www.linkedin.com/company/codestrux" rel="me noopener">linkedin.com/company/codestrux</a></li>
      <li><a href="https://wa.me/50671789868" rel="me noopener">WhatsApp</a></li>
    </ul>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Trabajemos juntos">
  <div class="pane__bar"><span class="pane__path">~/contact</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> cat <span class="arg">contact.md</span></h2>
    <p>Vea lo que hemos construido en la página de <a href="/es/projects/">proyectos</a>, conozca más <a href="/es/about/">sobre nosotros</a> o explore los <a href="/es/services/">servicios</a> que ofrecemos. Cuando facturamos, enviamos un cargo de MoonPay Commerce — <a href="/es/pay/">cómo pagar</a>. ¿Listo para conversar? Escríbanos a <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>.</p>
  </div>
</section>

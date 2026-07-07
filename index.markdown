---
layout: home
title: "CodeStrux Tech"
lang: en
ref: home
alt_url: /es/
permalink: /
---

<section class="pane pane--feature pane--col-3 pane--row-2 hero" aria-label="CodeStrux Tech">
  <div class="pane__bar">
    <span class="pane__path">codestrux@cartago:~</span>
    <span class="pane__status" data-boot-status data-ready="ready.">booting codestrux.tech …</span>
    <span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span>
  </div>
  <div class="pane__body hero__body">
    {% include codestrux-wordmark.html %}
    <p class="prompt prompt--hero">
      <span class="prompt__sigil" aria-hidden="true">$</span>
      <span class="prompt__cmd" data-typewriter data-typewriter-text="whoami">whoami</span>
      <span class="caret" aria-hidden="true"></span>
    </p>
    <h1 class="hero__heading">We build and run <span class="hl">infrastructure</span> and <span class="hl">software</span>.</h1>
    <p class="hero__sub">A studio from Cartago, Costa Rica. From the Linux box and the hypervisor up to the API, the data pipeline, the web app, and the AI agent — we design it, ship it, and keep it running.</p>
    <p class="hero__cta">
      <a class="btn" href="/projects/">ls projects</a>
      <a class="btn btn--ghost" href="mailto:contact@codestrux.tech">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
    </p>
  </div>
</section>

<section class="pane" aria-label="Infrastructure and Linux">
  <div class="pane__bar"><span class="pane__path">~/infra</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> uname <span class="flag">-a</span></h2>
    <p>Arch, Debian/Ubuntu, FreeBSD, RHEL, and Amazon Linux on Proxmox VE, KVM, and bare metal. We provision, harden, and operate the machines our software runs on.</p>
  </div>
</section>

<section class="pane" aria-label="Open source">
  <div class="pane__bar"><span class="pane__path">~/oss</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> git remote <span class="flag">-v</span></h2>
    <p>We build on open source and contribute back, and release our own tooling under the CodeStrux organization on GitHub.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Cloud, data, and backends">
  <div class="pane__bar"><span class="pane__path">~/stack</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">stack/</span></h2>
    <p>AWS and GCP, serverless and containers, ETL and BI pipelines, and production backends in Java (Jakarta EE, Spring Boot) and TypeScript (React, Next.js).</p>
    <ul class="tags" aria-label="Stack">
      <li>AWS</li><li>GCP</li><li>Java</li><li>Spring Boot</li><li>Jakarta EE</li><li>TypeScript</li><li>React</li><li>Next.js</li><li>Docker</li><li>Kubernetes</li>
    </ul>
  </div>
</section>

<section class="pane pane--feature pane--col-2 product-stratos" aria-label="Stratos WhatsApp — featured product">
  <div class="pane__bar"><span class="pane__path">~/projects/stratos</span><span class="pane__status">running</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">./stratos --status</span></p>
    <div class="product-wordmark">{% include stratos-wordmark.html class="is-lg" %}</div>
    <p>Our own real-time WhatsApp Business inbox for LATAM SMBs: live updates over SSE, Spanish voice-note transcription, AI reply suggestions, and vertical AI agents.</p>
    <ul class="tags" aria-label="Stratos capabilities">
      <li>AI agents</li><li>SSE inbox</li><li>voice transcription</li><li>reply suggestions</li><li>WhatsApp Flows</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="https://stratos.talk" rel="noopener">open stratos</a> <a class="btn btn--ghost" href="/projects/">more projects</a></p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Work with us">
  <div class="pane__bar"><span class="pane__path">~/contact</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> cat <span class="arg">contact.md</span></h2>
    <p>See what we have built on the <a href="/projects/">projects</a> page, read more <a href="/about/">about us</a>, or browse the <a href="/services/">services</a> we offer. Ready to talk? Email <a href="mailto:contact@codestrux.tech">contact@codestrux.tech</a>.</p>
  </div>
</section>

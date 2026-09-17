---
layout: home
title: "CodeStrux Tech"
description: "CodeStrux Tech is a studio in Cartago, Costa Rica. We build and run infrastructure and software for confidential systems — metadata-only AI, Linux, data pipelines, Java, TypeScript, e-invoicing, and WhatsApp."
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
    <p class="hero__sub">A studio from Cartago, Costa Rica. From the Linux box and the hypervisor up to the API, the data pipeline, the web app, and the AI agent — including on highly confidential systems. Agents see metadata only; humans approve the script; the data never enters the model.</p>
    <p class="hero__cta">
      <a class="btn" href="/projects/">ls projects</a>
      <a class="btn btn--ghost" href="/security/">cat security.md</a>
      <a class="btn btn--ghost" href="mailto:{{ site.author.email }}">contact</a>
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

<section class="pane pane--feature pane--col-2" aria-label="Confidential AI">
  <div class="pane__bar"><span class="pane__path">~/security</span><span class="pane__status">metadata only</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">cat security.md</span></p>
    <h2 class="hero__heading">Confidential data. Agents never see it.</h2>
    <p>We advocate for data security on systems that cannot be dumped into a vendor model. The loop is short:</p>
    <ol>
      <li>Agents consume metadata — schemas, shapes, volumes — and propose an extraction script.</li>
      <li>The CodeStrux Tech team reviews that script against human criteria.</li>
      <li>The approved script runs where the data already lives. We compare the extract. Agents still never receive the payload.</li>
    </ol>
    <p>We also run environment security testing on the stack you operate.</p>
    <p class="hero__cta"><a class="btn" href="/security/">cat security.md</a> <a class="btn btn--ghost" href="/services/">ls services/</a></p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Cloud, data, and backends">
  <div class="pane__bar"><span class="pane__path">~/stack</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">stack/</span></h2>
    <p>AWS, Cloudflare, Azure and GCP; Proxmox and containers; ETL and BI pipelines; production backends in Java (Jakarta EE, Spring Boot) and TypeScript (React, Next.js); Costa Rican e-invoicing and WhatsApp Business.</p>
    <ul class="tags" aria-label="Stack">
      <li>Proxmox</li><li>AWS</li><li>GCP</li><li>Java</li><li>Spring Boot</li><li>Jakarta EE</li><li>TypeScript</li><li>React</li><li>Next.js</li><li>ETL</li><li>WhatsApp</li><li>FacturaCR</li>
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

<section class="pane pane--feature pane--col-2 product-exc" aria-label="exc — the everything menu for your terminal">
  <div class="pane__bar"><span class="pane__path">~/projects/exc</span><span class="pane__status">v0.6.0</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">exc</span></p>
    <h2 class="hero__heading">exc<span class="hl">.</span></h2>
    <p class="card-meta">the everything menu for your terminal</p>
    <p>A searchable, keyboard-driven command picker in Rust: one TOML file of commands, profiles, and prompted parameters, with a live host-info header. Open source, MIT.</p>
    <ul class="tags" aria-label="exc capabilities">
      <li>Rust</li><li>TUI</li><li>TOML config</li><li>regex filter</li><li>sysinfo</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="/exc/">open exc</a> <a class="btn btn--ghost" href="https://github.com/codestrux/exc-launcher" rel="noopener">github</a></p>
  </div>
</section>

<section class="pane pane--feature pane--col-2" aria-label="CodeStrux Learn">
  <div class="pane__bar"><span class="pane__path">~/projects/learn</span><span class="pane__status">usdc</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">open learn</span></p>
    <h2 class="hero__heading">Learn</h2>
    <p class="card-meta">live sessions on safe coding</p>
    <p>We sell live session courses so people learn safe coding practices. Catalog, accounts, and LMS — unlock with USDC through MoonPay Commerce.</p>
    <ul class="tags" aria-label="Learn capabilities">
      <li>live sessions</li><li>safe coding</li><li>USDC</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="https://learn.codestrux.tech" rel="noopener">open learn</a> <a class="btn btn--ghost" href="/pay/">cat pay.md</a></p>
  </div>
</section>

<section class="pane pane--feature pane--col-2" aria-label="arayaj.photo">
  <div class="pane__bar"><span class="pane__path">~/projects/photo</span><span class="pane__status">usdc</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">open photo</span></p>
    <h2 class="hero__heading">arayaj.photo</h2>
    <p class="card-meta">photography portfolio</p>
    <p>A bilingual photography portfolio: albums, quotes, and USDC checkout through MoonPay Commerce.</p>
    <ul class="tags" aria-label="arayaj.photo capabilities">
      <li>portfolio</li><li>USDC</li><li>MoonPay</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="https://arayaj.photo" rel="noopener">open photo</a> <a class="btn btn--ghost" href="/pay/">cat pay.md</a></p>
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

<section class="pane pane--col-2" aria-label="Work with us">
  <div class="pane__bar"><span class="pane__path">~/contact</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> cat <span class="arg">contact.md</span></h2>
    <p>See what we have built on the <a href="/projects/">projects</a> page, read more <a href="/about/">about us</a>, or browse the <a href="/services/">services</a> we offer. When we bill, we send a MoonPay Commerce charge — <a href="/pay/">how to pay</a>. Ready to talk? Email <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>.</p>
  </div>
</section>

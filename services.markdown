---
layout: page
title: "Services"
description: "CodeStrux builds and operates the full stack: security and penetration tests, Linux and Proxmox, cloud, ETL, Java and TypeScript, live courses on safe coding, Costa Rican e-invoicing, WhatsApp Business, and metadata-only AI on confidential systems."
lang: en
ref: services
alt_url: /es/services/
permalink: /services/
---

<section class="pane pane--col-4" aria-label="Services">
  <div class="pane__bar"><span class="pane__path">~/services</span><span class="pane__status">$ ls -la</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">ls services/</span></p>
    <h1 class="hero__heading">What we do</h1>
    <p class="hero__sub">We build and operate the full stack — the machines, the platforms on top of them, and the software they run. Security and penetration tests are a core engagement. One project can span infrastructure, data, backend, frontend, compliance, and confidential AI without handing off between vendors.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Infrastructure and virtualization">
  <div class="pane__bar"><span class="pane__path">services/infra</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> infra <span class="flag">--virt</span></h2>
    <p>We run Linux in production and at home: Arch, Debian and Ubuntu, FreeBSD, RHEL, and Amazon Linux. We provision and operate virtualization with Proxmox VE and KVM, and we are comfortable on bare metal and RAID. We treat the host as part of the product — provisioned, hardened, monitored, and reproducible.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Open source">
  <div class="pane__bar"><span class="pane__path">services/oss</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> oss</h2>
    <p>We build on open source and support it. We prefer open, inspectable tooling, run self-hosted services where it makes sense, and release our own work under the CodeStrux organization on GitHub.</p>
  </div>
</section>

<section class="pane pane--feature pane--col-4" aria-label="Security and penetration tests">
  <div class="pane__bar"><span class="pane__path">services/pentest</span><span class="pane__status">core</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> pentest <span class="flag">--env</span></h2>
    <p>Security and penetration tests are how we earn the right to operate a stack. We probe hosts, networks, identity, secrets, and the path from laptop to prod — the environment that is running, not a slide deck. Findings stay with the operators. We sit with the team that owns the box until exposure is closed. Read the practice on <a href="/security/">security</a>.</p>
    <p class="hero__cta"><a class="btn" href="/security/">cat security.md</a></p>
  </div>
</section>

<section class="pane" aria-label="Cloud and serverless">
  <div class="pane__bar"><span class="pane__path">services/cloud</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> cloud</h2>
    <p>Cloud-native systems on AWS, Azure, Cloudflare and GCP — serverless functions, containers, managed data services, and infrastructure as code. We size for the workload and keep an eye on cost as well as availability.</p>
  </div>
</section>

<section class="pane" aria-label="Data pipelines, ETL and BI">
  <div class="pane__bar"><span class="pane__path">services/data</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> pipeline <span class="flag">--etl</span></h2>
    <p>Data pipelines and analytics: ingestion and ETL, warehousing, and business-intelligence reporting on tools such as Redshift, Glue, and QuickSight. We turn operational data into something the business can actually use.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Backends">
  <div class="pane__bar"><span class="pane__path">services/backend</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">backend/</span></h2>
    <p>Production backends in two main stacks:</p>
    <ul>
      <li><strong>Java / Jakarta EE</strong> — JPA/EclipseLink, JAX-RS, CDI, and JSF/PrimeFaces, on application servers such as WildFly.</li>
      <li><strong>Java / Spring &amp; Spring Boot</strong> — REST and reactive/async services.</li>
    </ul>
  </div>
</section>

<section class="pane" aria-label="Frontends">
  <div class="pane__bar"><span class="pane__path">services/frontend</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> frontend</h2>
    <p>Typed, modern web interfaces with TypeScript, React, and Next.js, paired with the backends above.</p>
  </div>
</section>

<section class="pane" aria-label="Databases">
  <div class="pane__bar"><span class="pane__path">services/db</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> db</h2>
    <p>We run and tune relational and document stores: MySQL and Percona, and MongoDB / Atlas.</p>
  </div>
</section>

<section class="pane" aria-label="DevOps and CI/CD">
  <div class="pane__bar"><span class="pane__path">services/devops</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ci <span class="flag">--cd</span></h2>
    <p>We containerize with Docker, orchestrate with Kubernetes, and automate build and deployment with GitHub Actions and similar pipelines.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Fintech compliance and e-invoicing">
  <div class="pane__bar"><span class="pane__path">services/fintech</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> factura <span class="flag">--sign</span></h2>
    <p>Costa Rican electronic invoicing against Hacienda's requirements — generating, signing (XAdES), and submitting comprobantes — and the surrounding compliance details.</p>
  </div>
</section>

<section class="pane" aria-label="Messaging automation">
  <div class="pane__bar"><span class="pane__path">services/messaging</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> wa <span class="flag">--send</span></h2>
    <p>WhatsApp Business Platform / Meta Cloud API integration for customer messaging: templates, flows, and automation built around consent and opt-in compliance.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="AI on confidential data">
  <div class="pane__bar"><span class="pane__path">services/ai</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> agent <span class="flag">--metadata</span></h2>
    <p>We use AI for speed on systems that cannot leak into a vendor model. Agents see metadata only — schemas, shapes, volumes — and propose an extraction script. The CodeStrux Tech team approves it; the script runs where the data already lives. The model never receives the payload. Read the full loop on <a href="/security/">security</a>.</p>
    <p class="hero__cta"><a class="btn" href="/security/">cat security.md</a></p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Live courses on safe coding">
  <div class="pane__bar"><span class="pane__path">services/learn</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> learn <span class="flag">--live</span></h2>
    <p>We sell live session courses so people learn safe coding practices — secrets, payloads, and environments that stay closed. Join a session, not only a recording. Unlock on <a href="https://learn.codestrux.tech" rel="noopener">CodeStrux Learn</a> with USDC.</p>
    <p class="hero__cta"><a class="btn" href="https://learn.codestrux.tech" rel="noopener">open learn</a> <a class="btn btn--ghost" href="/pay/">cat pay.md</a></p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Ready to start">
  <div class="pane__bar"><span class="pane__path">~/start</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ./start.sh</h2>
    <p>Every engagement is different. Tell us what you are building and we will tell you how we can help. When we bill, we send a MoonPay Commerce charge — <a href="/pay/">how to pay</a>.</p>
    <p class="hero__cta"><a class="btn" href="mailto:{{ site.author.email }}">contact</a> <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a> <a class="btn btn--ghost" href="/pay/">cat pay.md</a></p>
  </div>
</section>

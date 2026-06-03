---
layout: page
title: "Projects"
lang: en
ref: projects
alt_url: /es/projects/
permalink: /projects/
---

<section class="pane pane--col-4" aria-label="Projects">
  <div class="pane__bar"><span class="pane__path">~/projects</span><span class="pane__status">$ ls -la</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">ls projects/</span></p>
    <h1 class="hero__heading">What we have built</h1>
    <p class="hero__sub">A look at the products we design, build, and operate. These are our own projects — the work shows the range of the stack we cover, from messaging platforms to e-invoicing to developer tooling.</p>
  </div>
</section>

<section class="pane pane--feature pane--col-4 product-stratos" aria-label="Stratos WhatsApp">
  <div class="pane__bar"><span class="pane__path">projects/stratos-whatsapp</span><span class="pane__status">running · codestrux.app.stratos.talk</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <div class="product-wordmark">{% include stratos-wordmark.html class="is-lg" %}</div>
    <p class="card-meta">Audio-first WhatsApp Business inbox for LATAM SMBs</p>
    <p>A real-time WhatsApp Business inbox built for small and mid-sized businesses in Latin America. It delivers messages over SSE, transcribes Spanish voice notes, suggests replies, and reconciles payment receipts (SINPE, Pix, SPEI) with OCR. It supports templates with variables, WhatsApp Flows, vertical AI agents, and consent/opt-in compliance for Costa Rica's Ley 8968, Brazil's LGPD, and Mexico's LFPDPPP. Auth runs on Keycloak / OIDC.</p>
    <ul class="tags" aria-label="Stack">
      <li>Next.js</li><li>React 19</li><li>Java 21</li><li>Spring Boot</li><li>MySQL</li><li>MongoDB</li><li>Keycloak / OIDC</li><li>SSE</li>
    </ul>
    <p class="hero__cta"><a class="btn" href="https://stratos.talk" rel="noopener">open stratos</a></p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="FacturaCR (ce-je)">
  <div class="pane__bar"><span class="pane__path">projects/facturacr</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head">FacturaCR <span class="flag">(ce-je)</span></h2>
    <p class="card-meta">Costa Rican electronic invoicing</p>
    <p>A Costa Rican electronic-invoicing engine. It generates, signs (XAdES), and submits comprobantes to Hacienda against the v4.4 XSD — facturas, tiquetes, notas de crédito and débito, compras, exportación, and recibos — with export to PDF, Excel, and QR.</p>
    <ul class="tags" aria-label="Stack">
      <li>Jakarta EE 10</li><li>Java 21</li><li>WildFly</li><li>EclipseLink</li><li>RESTEasy/Jersey</li><li>JSF/PrimeFaces</li><li>JAXB</li><li>MySQL/Percona</li>
    </ul>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Build with us">
  <div class="pane__bar"><span class="pane__path">~/build</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> make <span class="arg">contact</span></h2>
    <p>Interested in something similar, or want to know more about how these are put together? Email us at <a href="mailto:contact@codestrux.tech">contact@codestrux.tech</a>.</p>
  </div>
</section>

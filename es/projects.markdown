---
layout: page
title: "Proyectos"
lang: es-CR
ref: projects
alt_url: /projects/
permalink: /es/projects/
---

<section class="pane pane--col-4" aria-label="Proyectos">
  <div class="pane__bar"><span class="pane__path">~/projects</span><span class="pane__status">$ ls -la</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">ls projects/</span></p>
    <h1 class="hero__heading">Lo que hemos construido</h1>
    <p class="hero__sub">Un vistazo a los productos que diseñamos, construimos y operamos. Son nuestros propios proyectos — el trabajo muestra el alcance del stack que cubrimos, desde plataformas de mensajería hasta facturación electrónica y herramientas para desarrolladores.</p>
  </div>
</section>

<section class="pane pane--feature pane--col-4 product-stratos" aria-label="Stratos WhatsApp">
  <div class="pane__bar"><span class="pane__path">projects/stratos-whatsapp</span><span class="pane__status">en línea · codestrux.app.stratos.talk</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <div class="product-wordmark">{% include stratos-wordmark.html class="is-lg" %}</div>
    <p class="card-meta">Bandeja de WhatsApp Business centrada en audio para pymes de LATAM</p>
    <p>Una bandeja de entrada de WhatsApp Business en tiempo real, pensada para pequeñas y medianas empresas en América Latina. Entrega mensajes por SSE, transcribe notas de voz en español, sugiere respuestas y concilia comprobantes de pago (SINPE, Pix, SPEI) con OCR. Soporta plantillas con variables, WhatsApp Flows, agentes de IA verticales y cumplimiento de consentimiento/opt-in para la Ley 8968 de Costa Rica, la LGPD de Brasil y la LFPDPPP de México. La autenticación corre sobre Keycloak / OIDC.</p>
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
    <p class="card-meta">Facturación electrónica de Costa Rica</p>
    <p>Un motor de facturación electrónica de Costa Rica. Genera, firma (XAdES) y envía comprobantes a Hacienda conforme al XSD v4.4 — facturas, tiquetes, notas de crédito y débito, compras, exportación y recibos — con exportación a PDF, Excel y QR.</p>
    <ul class="tags" aria-label="Stack">
      <li>Jakarta EE 10</li><li>Java 21</li><li>WildFly</li><li>EclipseLink</li><li>RESTEasy/Jersey</li><li>JSF/PrimeFaces</li><li>JAXB</li><li>MySQL/Percona</li>
    </ul>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Construya con nosotros">
  <div class="pane__bar"><span class="pane__path">~/build</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> make <span class="arg">contact</span></h2>
    <p>¿Le interesa algo similar o quiere saber más sobre cómo están hechos? Escríbanos a <a href="mailto:contact@codestrux.tech">contact@codestrux.tech</a>.</p>
  </div>
</section>

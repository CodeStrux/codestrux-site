---
layout: page
title: "Servicios"
lang: es-CR
ref: services
alt_url: /services/
permalink: /es/services/
---

<section class="pane pane--col-4" aria-label="Servicios">
  <div class="pane__bar"><span class="pane__path">~/services</span><span class="pane__status">$ ls -la</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">ls services/</span></p>
    <h1 class="hero__heading">Qué hacemos</h1>
    <p class="hero__sub">Construimos y operamos el stack completo — las máquinas, las plataformas que corren sobre ellas y el software que ejecutan. Nuestras capacidades son compartidas en el equipo, así que un solo proyecto puede abarcar infraestructura, datos, backend, frontend y cumplimiento sin traspasos entre proveedores.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Infraestructura y virtualización">
  <div class="pane__bar"><span class="pane__path">services/infra</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> infra <span class="flag">--virt</span></h2>
    <p>Corremos Linux en producción y en casa: Arch, Debian y Ubuntu, FreeBSD, RHEL y Amazon Linux. Aprovisionamos y operamos virtualización con Proxmox VE y KVM, y nos manejamos en hardware dedicado y RAID. Tratamos el host como parte del producto — aprovisionado, endurecido, monitoreado y reproducible.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Código abierto">
  <div class="pane__bar"><span class="pane__path">services/oss</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> oss</h2>
    <p>Construimos sobre código abierto y lo apoyamos. Preferimos herramientas abiertas e inspeccionables, autohospedamos servicios cuando tiene sentido y publicamos nuestro propio trabajo bajo la organización CodeStrux en GitHub.</p>
  </div>
</section>

<section class="pane" aria-label="Nube y serverless">
  <div class="pane__bar"><span class="pane__path">services/cloud</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> cloud</h2>
    <p>Sistemas nativos de la nube en AWS y GCP — funciones serverless, contenedores, servicios de datos administrados e infraestructura como código. Dimensionamos según la carga de trabajo y cuidamos tanto el costo como la disponibilidad.</p>
  </div>
</section>

<section class="pane" aria-label="Pipelines de datos, ETL y BI">
  <div class="pane__bar"><span class="pane__path">services/data</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> pipeline <span class="flag">--etl</span></h2>
    <p>Pipelines de datos y analítica: ingesta y ETL, almacenamiento de datos y reportería de inteligencia de negocio con herramientas como Redshift, Glue y QuickSight. Convertimos los datos operativos en algo que el negocio realmente pueda usar.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Backends">
  <div class="pane__bar"><span class="pane__path">services/backend</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">backend/</span></h2>
    <p>Backends de producción en dos stacks principales:</p>
    <ul>
      <li><strong>Java / Jakarta EE</strong> — JPA/EclipseLink, JAX-RS, CDI y JSF/PrimeFaces, sobre servidores de aplicaciones como WildFly.</li>
      <li><strong>Java / Spring y Spring Boot</strong> — servicios REST y reactivos/asíncronos.</li>
    </ul>
  </div>
</section>

<section class="pane" aria-label="Frontends">
  <div class="pane__bar"><span class="pane__path">services/frontend</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> frontend</h2>
    <p>Interfaces web tipadas y modernas con TypeScript, React y Next.js, junto con los backends anteriores.</p>
  </div>
</section>

<section class="pane" aria-label="Bases de datos">
  <div class="pane__bar"><span class="pane__path">services/db</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> db</h2>
    <p>Operamos y afinamos almacenes relacionales y documentales: MySQL y Percona, y MongoDB / Atlas.</p>
  </div>
</section>

<section class="pane" aria-label="DevOps y CI/CD">
  <div class="pane__bar"><span class="pane__path">services/devops</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ci <span class="flag">--cd</span></h2>
    <p>Contenerizamos con Docker, orquestamos con Kubernetes y automatizamos la construcción y el despliegue con GitHub Actions y pipelines similares.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Cumplimiento fintech y facturación electrónica">
  <div class="pane__bar"><span class="pane__path">services/fintech</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> factura <span class="flag">--sign</span></h2>
    <p>Facturación electrónica de Costa Rica conforme a los requisitos de Hacienda — generando, firmando (XAdES) y enviando comprobantes — y los detalles de cumplimiento alrededor.</p>
  </div>
</section>

<section class="pane" aria-label="Automatización de mensajería">
  <div class="pane__bar"><span class="pane__path">services/messaging</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> wa <span class="flag">--send</span></h2>
    <p>Integración con la Plataforma de WhatsApp Business / Meta Cloud API para la mensajería con clientes: plantillas, flujos y automatización construidos en torno al consentimiento y el opt-in.</p>
  </div>
</section>

<section class="pane" aria-label="IA y herramientas de agentes">
  <div class="pane__bar"><span class="pane__path">services/ai</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> agent</h2>
    <p>Construimos con frameworks modernos de IA y de agentes y los integramos en backends y flujos de trabajo reales.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Ingenieros desplegados en campo">
  <div class="pane__bar"><span class="pane__path">services/fde</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> fde <span class="flag">--embed</span></h2>
    <p>Los Forward Deployed Engineers se integran con su equipo y entregan IA en producción — un ingeniero de IA en pareja con un ingeniero de industria aplicada, en un camino acotado hasta el handoff. Lea la sección FDE completa, o gestione embeds en <a href="https://paramo.codestrux.tech" rel="noopener">Paramo</a>.</p>
    <p class="hero__cta"><a class="btn" href="/es/fde/">ls fde/</a> <a class="btn btn--ghost" href="https://paramo.codestrux.tech" rel="noopener">open paramo</a></p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="¿Listo para empezar?">
  <div class="pane__bar"><span class="pane__path">~/start</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ./start.sh</h2>
    <p>Cada proyecto es distinto. Cuéntenos qué está construyendo y le diremos cómo podemos ayudar.</p>
    <p class="hero__cta"><a class="btn" href="mailto:contact@codestrux.tech">contact</a> <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a></p>
  </div>
</section>

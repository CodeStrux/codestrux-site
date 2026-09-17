---
layout: page
title: "IA confidencial"
description: "CodeStrux usa IA en sistemas confidenciales sin enviar cargas al modelo. Los agentes ven solo metadatos. El equipo de CodeStrux Tech aprueba el script; corre donde ya viven los datos."
lang: es-CR
ref: security
alt_url: /security/
permalink: /es/security/
---

<section class="pane pane--col-4" aria-label="IA confidencial">
  <div class="pane__bar"><span class="pane__path">~/security</span><span class="pane__status">$ cat security.md</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">cat security.md</span></p>
    <h1 class="hero__heading">IA sobre datos confidenciales — sin que el modelo los vea.</h1>
    <p class="hero__sub">Hemos trabajado sobre sistemas altamente confidenciales. Abogamos por la seguridad de los datos. La IA es cómo avanzamos rápido; las cargas nunca van al modelo.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Qué ven los agentes">
  <div class="pane__bar"><span class="pane__path">security/metadata</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> describe <span class="flag">--schema</span></h2>
    <p>Los agentes consumen <strong>solo metadatos</strong>: formas, esquemas, volúmenes, nombres de columnas — lo suficiente para predecir cómo debería verse un script de extracción. No los registros confidenciales. El modelo nunca recibe la carga que nos ayuda a alcanzar.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Puerta humana">
  <div class="pane__bar"><span class="pane__path">security/review</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> review <span class="flag">--human</span></h2>
    <p>El equipo de CodeStrux Tech lee ese script con criterio humano antes de que algo se ejecute. Un agente puede proponer; no puede ejecutar. La aprobación es una persona, no un parámetro de temperatura.</p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Ejecutar y comparar">
  <div class="pane__bar"><span class="pane__path">security/run</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> run <span class="flag">--compare</span></h2>
    <p>El script aprobado corre en el entorno de confianza, donde ya viven los datos. Comparamos el extracto con lo que el agente necesitaba. Si está mal, corregimos el script y volvemos a intentar. Los agentes siguen sin recibir los datos — ni en el primer paso, ni en el reintento.</p>
  </div>
</section>

<section class="pane pane--feature pane--col-4" aria-label="Por qué este método">
  <div class="pane__bar"><span class="pane__path">security/why</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> why</h2>
    <p>Así aprovechamos los LLM al máximo — la velocidad de un script propuesto, la cobertura de un extracto bien formado — sin poner datos confidenciales en el contexto del modelo, y sin una vía de exfiltración a través del agente. El modelo nos ayuda a escribir la herramienta. La herramienta nunca reporta los registros de vuelta al modelo.</p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Iniciar un proyecto confidencial">
  <div class="pane__bar"><span class="pane__path">~/start</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ./start.sh</h2>
    <p>¿Necesita este ciclo en un sistema que no puede exponer a un modelo de un proveedor? Cuéntenos qué está construyendo. Vea <a href="/es/services/">servicios</a> para el resto del stack, o <a href="/es/pay/">cómo pagar</a> cuando esté listo para liquidar.</p>
    <p class="hero__cta">
      <a class="btn" href="mailto:{{ site.author.email }}">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
      <a class="btn btn--ghost" href="/es/services/">ls services/</a>
    </p>
  </div>
</section>

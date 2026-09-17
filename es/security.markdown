---
layout: page
title: "Seguridad"
description: "Pruebas de seguridad y de penetración de CodeStrux en los entornos que operamos — hosts, redes, identidad, secretos, del laptop a producción — e IA en sistemas confidenciales sin enviar cargas al modelo."
lang: es-CR
ref: security
alt_url: /security/
permalink: /es/security/
---

<section class="pane pane--col-4" aria-label="Seguridad">
  <div class="pane__bar"><span class="pane__path">~/security</span><span class="pane__status">$ cat security.md</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">cat security.md</span></p>
    <h1 class="hero__heading">Pruebas de seguridad y de penetración. Después, IA que nunca ve la carga.</h1>
    <p class="hero__sub">El pentest es un servicio de CodeStrux, no una nota al pie. Probamos el stack que realmente corre. En sistemas confidenciales, los agentes ven solo metadatos; el equipo de CodeStrux Tech aprueba el script; los registros nunca entran al modelo.</p>
  </div>
</section>

<section class="pane pane--feature pane--col-4" aria-label="Pruebas de seguridad y de penetración">
  <div class="pane__bar"><span class="pane__path">security/pentest</span><span class="pane__status">core</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> pentest <span class="flag">--env</span></h2>
    <p>Las pruebas de seguridad y de penetración son cómo nos ganamos el derecho de operar un stack. Probamos hosts, redes, identidad, secretos y el camino del laptop a producción — el entorno que está corriendo, no una presentación. Los hallazgos se quedan con quien opera. Nos sentamos con el equipo dueño de la máquina hasta cerrar la exposición.</p>
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

<section class="pane pane--col-4" aria-label="Cursos en vivo de código seguro">
  <div class="pane__bar"><span class="pane__path">security/learn</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> learn <span class="flag">--live</span></h2>
    <p>La versión de aula es en vivo: vendemos cursos en sesión para que la gente aprenda prácticas de código seguro. Se desbloquean en <a href="https://learn.codestrux.tech" rel="noopener">CodeStrux Learn</a> con USDC.</p>
    <p class="hero__cta"><a class="btn" href="https://learn.codestrux.tech" rel="noopener">open learn</a></p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Iniciar un proyecto confidencial">
  <div class="pane__bar"><span class="pane__path">~/start</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ./start.sh</h2>
    <p>¿Necesita un pentest, o este ciclo en un sistema que no puede exponer a un modelo de un proveedor? Cuéntenos qué está construyendo. Vea <a href="/es/services/">servicios</a> para el resto del stack, o <a href="/es/pay/">cómo pagar</a> cuando esté listo para liquidar.</p>
    <p class="hero__cta">
      <a class="btn" href="mailto:{{ site.author.email }}">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
      <a class="btn btn--ghost" href="/es/services/">ls services/</a>
    </p>
  </div>
</section>

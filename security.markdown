---
layout: page
title: "Confidential AI"
description: "CodeStrux uses AI on confidential systems without sending payloads to the model. Agents see metadata only. The CodeStrux Tech team approves the script; it runs where the data already lives."
lang: en
ref: security
alt_url: /es/security/
permalink: /security/
---

<section class="pane pane--col-4" aria-label="Confidential AI">
  <div class="pane__bar"><span class="pane__path">~/security</span><span class="pane__status">$ cat security.md</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">cat security.md</span></p>
    <h1 class="hero__heading">AI on confidential data — without the model seeing it.</h1>
    <p class="hero__sub">We have worked on highly confidential systems. We advocate for data security. AI is how we move fast; payloads never go to the model.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="What agents see">
  <div class="pane__bar"><span class="pane__path">security/metadata</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> describe <span class="flag">--schema</span></h2>
    <p>Agents consume <strong>metadata only</strong>: shapes, schemas, volumes, column names — enough to predict how an extraction script should look. Not the confidential records. The model never receives the payload it is helping us reach.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Human gate">
  <div class="pane__bar"><span class="pane__path">security/review</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> review <span class="flag">--human</span></h2>
    <p>The CodeStrux Tech team reads that script against human criteria before anything runs. An agent can propose; it cannot execute. Approval is a person, not a temperature setting.</p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Execute and compare">
  <div class="pane__bar"><span class="pane__path">security/run</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> run <span class="flag">--compare</span></h2>
    <p>The approved script runs in the trusted environment, where the data already lives. We compare the extract against what the agent needed. If it is wrong, we correct the script and try again. Agents still never receive the data — not on the first pass, not on the retry.</p>
  </div>
</section>

<section class="pane pane--feature pane--col-4" aria-label="Why this method">
  <div class="pane__bar"><span class="pane__path">security/why</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> why</h2>
    <p>This is how we take full advantage of LLMs — the speed of a proposed script, the coverage of a well-shaped extract — without putting confidential data in model context, and without a data-exfiltration path through the agent. The model helps us write the tool. The tool never reports the records back to the model.</p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Start a confidential engagement">
  <div class="pane__bar"><span class="pane__path">~/start</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ./start.sh</h2>
    <p>Need this loop on a system you cannot expose to a vendor model? Tell us what you are building. See <a href="/services/">services</a> for the rest of the stack, or <a href="/pay/">how to pay</a> when you are ready to settle.</p>
    <p class="hero__cta">
      <a class="btn" href="mailto:{{ site.author.email }}">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
      <a class="btn btn--ghost" href="/services/">ls services/</a>
    </p>
  </div>
</section>

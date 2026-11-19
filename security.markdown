---
layout: page
title: "Cybersecurity"
description: "Cybersecurity Analysis and Protection Services from CodeStrux Tech: a five-step security analysis of applications and servers, a report with findings and a correction plan, and AI on confidential systems that never receives the data."
lang: en
ref: security
alt_url: /es/security/
permalink: /security/
---

<section class="band band--hero">
  <div class="wrap">
    <p class="eyebrow">Cybersecurity</p>
    <h1 class="hero__heading">Cybersecurity Analysis and Protection Services</h1>
    <p class="hero__sub">We do each security analysis of applications and servers in the same order, in five steps. The order is the method: we start inside your applications and move out. You get findings that we demonstrated, each with a severity and a plan to correct it.</p>
  </div>
</section>

<section class="band band--alt">
  <div class="wrap">
    <div class="band__head">
      <p class="eyebrow">The analysis</p>
      <h2>Five steps, from the inside out</h2>
      <p>An analysis without order finds only what is easy to find. Our sequence makes sure that we examine each layer: the application, the systems below it, the configuration, and the paths that an attacker can use. Each step prepares the next step.</p>
    </div>
    <ol class="timeline">
      <li class="timeline__step">
        <h3>Reconnaissance</h3>
        <div class="timeline__body">
          <div class="timeline__main">
            <p>We identify the technologies, versions, environments, and configurations of your systems.</p>
          </div>
          <div class="timeline__aside">
            <p class="callout callout--result"><strong>The result:</strong> A full list of what you operate. This list tells us what to analyze in the next steps.</p>
          </div>
        </div>
      </li>
      <li class="timeline__step">
        <h3>Application analysis</h3>
        <div class="timeline__body">
          <div class="timeline__main">
            <p>We start the analysis from the inside and move out. This sequence gives the most accurate and effective results. For applications that your company develops, we do these tasks:</p>
            <ul class="tasks">
              <li><strong>Static analysis</strong> We examine the source code. The application does not run.</li>
              <li><strong>Dynamic analysis</strong> We test the application while it runs.</li>
              <li><strong>Interactive tests</strong> We monitor the application from the inside while we test it.</li>
              <li><strong>Penetration tests</strong> With your authorization, we attack the application as an attacker would.</li>
              <li class="tasks__solo"><strong>Analysis with specialized AI agents</strong></li>
            </ul>
          </div>
          <div class="timeline__aside">
            <p class="callout callout--result"><strong>The result:</strong> We know how the application operates on the inside before we attack it from the outside.</p>
          </div>
        </div>
      </li>
      <li class="timeline__step">
        <h3>Vulnerability analysis</h3>
        <div class="timeline__body">
          <div class="timeline__main">
            <p>Each vulnerability analysis includes the operating systems, the third-party applications, and the dependencies. Your own code is only one part of the system.</p>
          </div>
          <div class="timeline__aside">
            <p class="callout callout--result"><strong>The result:</strong> The report also shows the weak points that are below your own code.</p>
          </div>
        </div>
      </li>
      <li class="timeline__step">
        <h3>Compliance tests</h3>
        <div class="timeline__body">
          <div class="timeline__main">
            <p>We compare the system configurations with secure configuration standards, for example CIS, FIPS, and STIG.</p>
            <table>
              <thead><tr><th scope="col">Term</th><th scope="col">Meaning</th></tr></thead>
              <tbody>
              <tr><th scope="row">CIS</th><td>Center for Internet Security</td></tr>
              <tr><th scope="row">FIPS</th><td>Federal Information Processing Standards</td></tr>
              <tr><th scope="row">STIG</th><td>Security Technical Implementation Guide</td></tr>
              </tbody>
            </table>
          </div>
          <div class="timeline__aside">
            <p class="callout callout--result"><strong>The result:</strong> You see where each system does not agree with the standard.</p>
          </div>
        </div>
      </li>
      <li class="timeline__step">
        <h3>Exploitation tests</h3>
        <div class="timeline__body">
          <div class="timeline__main">
            <p>We automate the exploitation tests of the vulnerabilities. In the tests, we use human error and missing secure configurations as attack paths.</p>
          </div>
          <div class="timeline__aside">
            <p class="callout callout--result"><strong>The result:</strong> You know which vulnerabilities an attacker can use, and which ones to correct first.</p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="band__head">
      <p class="eyebrow">The report</p>
      <h2>A report that you can act on</h2>
    </div>
    <div class="cards cards--2">
      <article class="card">
        <h3>What you receive</h3>
        <p>You receive a security report. All our reports have the same structure, so that you can compare them.</p>
        <ul>
          <li>An executive summary with the priority actions.</li>
          <li>A card for each finding: description, root cause, evidence, impact, and recommendation.</li>
          <li>A severity for each finding: critical, high, medium, low, or informational.</li>
          <li>A plan to correct the findings.</li>
          <li>After you correct the findings, we test again and update the report.</li>
        </ul>
      </article>
      <article class="card">
        <h3>Our rules</h3>
        <ul>
          <li>The report is confidential. We give the findings only to your team.</li>
          <li>The severity of a finding is never higher than the impact that we demonstrated.</li>
          <li>If we cannot reproduce a finding, we list it as pending validation. It has no severity.</li>
          <li>We mask secrets, tokens, and personal data in the report.</li>
          <li>We work with the team that operates the system until the exposure is closed.</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="band band--alt" id="confidential-ai">
  <div class="wrap">
    <div class="band__head">
      <p class="eyebrow">Confidential systems</p>
      <h2>AI that never receives confidential data</h2>
      <p>Some systems must not send their data to an AI provider. On these systems, we use AI agents in three steps. The AI model helps us write the tool. The tool never sends the records to the AI model.</p>
    </div>
    <ol class="timeline">
      <li class="timeline__step timeline__step--plain">
        <h3>The agent sees metadata only</h3>
        <div class="timeline__body">
          <div class="timeline__main">
            <p>The agent receives <strong>metadata only</strong>: schemas, shapes, volumes, and column names. With this metadata, the agent proposes an extraction script. The agent does not receive the confidential records.</p>
          </div>
        </div>
      </li>
      <li class="timeline__step timeline__step--plain">
        <h3>A person approves the script</h3>
        <div class="timeline__body">
          <div class="timeline__main">
            <p>The CodeStrux Tech team reads the script before it runs. An agent can propose a script. An agent cannot run it. The approval always comes from a person.</p>
          </div>
        </div>
      </li>
      <li class="timeline__step timeline__step--plain">
        <h3>The script runs where the data is</h3>
        <div class="timeline__body">
          <div class="timeline__main">
            <p>The approved script runs in the trusted environment, where the data already is. We compare the result with the result that we need. If the result is wrong, we correct the script and run it again. The agent does not receive the data in the first run or in the next runs.</p>
          </div>
        </div>
      </li>
    </ol>
    <div class="timeline__after">
      <h3>Why we use this method</h3>
      <p>You get the speed of AI, because the agent writes the first version of the script. Your confidential data does not enter the AI model. The agent has no path to take data out of your environment.</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <h2>Ask for a security analysis</h2>
    <p>Tell us which applications and servers you want us to analyze. See <a href="/services/">services</a> for our other work. When we bill, we send a MoonPay Commerce charge. See <a href="/pay/">how to pay</a>.</p>
    <p class="hero__cta">
      <a class="btn" href="mailto:{{ site.author.email }}">Contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
      <a class="btn btn--ghost" href="/services/">See our services</a>
    </p>
  </div>
</section>

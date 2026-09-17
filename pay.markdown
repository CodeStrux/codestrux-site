---
layout: page
title: "How to pay CodeStrux"
description: "CodeStrux is crypto only. We receive USDC through MoonPay Commerce. Pay from a wallet, or buy USDC with a card inside MoonPay checkout. When we bill, we send you a charge."
lang: en
ref: pay
alt_url: /es/pay/
permalink: /pay/
---

<section class="pane pane--col-4" aria-label="How to pay CodeStrux">
  <div class="pane__bar"><span class="pane__path">~/pay</span><span class="pane__status">$ cat pay.md</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">cat pay.md</span></p>
    <h1 class="hero__heading">How to pay CodeStrux</h1>
    <p class="hero__sub">CodeStrux is <strong>crypto only</strong>. We receive <strong>USDC</strong> through <strong>MoonPay Commerce</strong>. We do not take card or bank transfer as a CodeStrux payment method.</p>
    <p>MoonPay is the checkout and, if you need it, the place to buy USDC. Identity checks on that path are MoonPay’s, not ours.</p>
    <p>When we bill, we send you a MoonPay Commerce charge. The same rail covers invoices for work, product checkouts, and other CodeStrux services. This page is how to complete it.</p>
    <p class="hero__cta">
      <a class="btn" href="mailto:{{ site.author.email }}">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
    </p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Pay with a wallet">
  <div class="pane__bar"><span class="pane__path">pay/wallet</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> pay <span class="flag">--wallet</span></h2>
    <p class="card-meta">1. Pay with a wallet (the direct path)</p>
    <p>If you already have USDC:</p>
    <ol>
      <li>Open the charge we sent, or the checkout on the CodeStrux product you are buying.</li>
      <li>Connect a wallet that holds USDC on the network shown in checkout.</li>
      <li>Confirm the transfer.</li>
    </ol>
    <p>You are paying us on-chain. No MoonPay identity check is required for this path if you already hold the USDC.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Pay with card inside MoonPay Commerce">
  <div class="pane__bar"><span class="pane__path">pay/card</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> pay <span class="flag">--card</span></h2>
    <p class="card-meta">2. Pay with card inside MoonPay Commerce</p>
    <p>Some charges show <strong>Pay with card</strong> in Helio’s own checkout. That is still a crypto payment to us.</p>
    <p>MoonPay buys USDC with your card (their <strong>Ramps</strong> on-ramp), then you finish the on-chain step so the USDC reaches CodeStrux. A card charge can succeed while our order stays unpaid until that second step is done. If that happens, return to the <strong>same</strong> checkout and continue.</p>
    <p>MoonPay will ask you to verify your identity (KYC) in their app or widget. Use their screens only. Do not send IDs to CodeStrux.</p>
    <p>Card on-ramp usually has a <strong>minimum around $20 USD</strong>. Charges under that floor are wallet-only.</p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Buy USDC first, then pay us">
  <div class="pane__bar"><span class="pane__path">pay/buy-usdc</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> buy <span class="arg">usdc</span></h2>
    <p class="card-meta">3. Buy USDC first, then pay us</p>
    <p>If checkout has no card button, or you want to fund a wallet yourself:</p>
    <ol>
      <li>Create or open a <a href="https://www.moonpay.com/" rel="noopener">MoonPay</a> account (web or app).</li>
      <li>Complete <a href="https://support.moonpay.com/en/articles/383332-how-to-verify-your-moonpay-account" rel="noopener">MoonPay account verification</a> when they ask.</li>
      <li><a href="https://www.moonpay.com/buy/usdc" rel="noopener">Buy USDC</a> to a wallet you control.</li>
      <li>Come back to the CodeStrux charge and pay with that wallet.</li>
    </ol>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Why MoonPay asks for KYC">
  <div class="pane__bar"><span class="pane__path">pay/kyc</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> kyc <span class="flag">--why</span></h2>
    <p>MoonPay is a regulated provider. They have to know who is buying crypto with a card or their app — <strong>Know Your Customer</strong>. That is a legal requirement on their side. It is not a CodeStrux login.</p>
    <p>They may ask for a government ID, a selfie, and sometimes proof of address or source of funds, depending on amount and country. See MoonPay’s <a href="https://support.moonpay.com/en/articles/383332-how-to-verify-your-moonpay-account" rel="noopener">verification guide</a> and <a href="https://support.moonpay.com/en/articles/380499-common-rejection-reasons-for-verification-documents" rel="noopener">document tips</a>.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Official MoonPay pages">
  <div class="pane__bar"><span class="pane__path">pay/links</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">moonpay/</span></h2>
    <ul>
      <li><a href="https://www.moonpay.com/" rel="noopener">MoonPay</a></li>
      <li><a href="https://www.moonpay.com/buy/usdc" rel="noopener">Buy USDC</a></li>
      <li><a href="https://support.moonpay.com/en/articles/383332-how-to-verify-your-moonpay-account" rel="noopener">Verify your account</a></li>
      <li><a href="https://support.moonpay.com/en/articles/466267-moonpay-commerce-faqs" rel="noopener">Commerce: how card payments work</a></li>
      <li><a href="https://support.moonpay.com/en/articles/466361-moonpay-commerce-integration-troubleshooting-guide" rel="noopener">If your card was charged but the merchant did not get paid</a></li>
    </ul>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Get a charge">
  <div class="pane__bar"><span class="pane__path">~/start</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> mail</h2>
    <p>Need a charge? Email or WhatsApp us. For custom work we send the MoonPay Commerce link; product checkouts use the same rail. Complete it with a wallet, or with card inside MoonPay if the charge shows that option.</p>
    <p class="hero__cta">
      <a class="btn" href="mailto:{{ site.author.email }}">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
    </p>
  </div>
</section>

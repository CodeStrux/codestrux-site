---
layout: page
title: "Cómo pagar CodeStrux"
description: "CodeStrux es solo cripto. Recibimos USDC por MoonPay Commerce. Pagá con billetera, o comprá USDC con tarjeta dentro del checkout de MoonPay. Cuando facturamos, te enviamos un cargo."
lang: es-CR
ref: pay
alt_url: /pay/
permalink: /es/pay/
---

<section class="pane pane--col-4" aria-label="Cómo pagar servicios de CodeStrux">
  <div class="pane__bar"><span class="pane__path">~/pay</span><span class="pane__status">$ cat pay.md</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <p class="prompt"><span class="prompt__sigil" aria-hidden="true">$</span> <span class="prompt__cmd">cat pay.md</span></p>
    <h1 class="hero__heading">Cómo pagar servicios de CodeStrux</h1>
    <p class="hero__sub">CodeStrux es <strong>solo cripto</strong>. Recibimos <strong>USDC</strong> por <strong>MoonPay Commerce</strong>. No aceptamos tarjeta ni transferencia bancaria como método de pago de CodeStrux.</p>
    <p>MoonPay es el checkout y, si lo necesitás, el lugar para comprar USDC. La verificación de identidad en ese camino es de MoonPay, no nuestra.</p>
    <p>Cuando facturamos, te enviamos un cargo de MoonPay Commerce. El mismo canal cubre facturas por trabajo, checkouts de producto y otros servicios de CodeStrux. Esta página es cómo completarlo.</p>
    <p class="hero__cta">
      <a class="btn" href="mailto:{{ site.author.email }}">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
    </p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Pagar con billetera">
  <div class="pane__bar"><span class="pane__path">pay/wallet</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> pay <span class="flag">--wallet</span></h2>
    <p class="card-meta">1. Pagar con billetera (el camino directo)</p>
    <p>Si ya tenés USDC:</p>
    <ol>
      <li>Abrí el cargo que te enviamos, o el checkout del producto CodeStrux que estás comprando.</li>
      <li>Conectá una billetera con USDC en la red que muestra el checkout.</li>
      <li>Confirmá la transferencia.</li>
    </ol>
    <p>Nos pagás on-chain. En este camino MoonPay no pide KYC si ya tenés el USDC.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Pagar con tarjeta dentro de MoonPay Commerce">
  <div class="pane__bar"><span class="pane__path">pay/card</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> pay <span class="flag">--card</span></h2>
    <p class="card-meta">2. Pagar con tarjeta dentro de MoonPay Commerce</p>
    <p>Algunos cargos muestran <strong>Pay with card</strong> en el checkout de Helio. Para nosotros sigue siendo un pago en cripto.</p>
    <p>MoonPay compra USDC con tu tarjeta (su on-ramp <strong>Ramps</strong>) y después tenés que completar el paso on-chain para que el USDC llegue a CodeStrux. La tarjeta puede cobrarse y nuestro pedido seguir pendiente hasta ese segundo paso. Si pasa, volvé al <strong>mismo</strong> checkout y continuá.</p>
    <p>MoonPay te va a pedir verificar la identidad (KYC) en su app o widget. Usá solo sus pantallas. No nos envíes documentos de identidad.</p>
    <p>El on-ramp con tarjeta suele tener un <strong>mínimo de unos 20 USD</strong>. Los cargos por debajo de ese piso van solo con billetera.</p>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Comprar USDC primero y después pagarnos">
  <div class="pane__bar"><span class="pane__path">pay/buy-usdc</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> buy <span class="arg">usdc</span></h2>
    <p class="card-meta">3. Comprar USDC primero y después pagarnos</p>
    <p>Si el checkout no muestra tarjeta, o preferís fondear la billetera por tu cuenta:</p>
    <ol>
      <li>Creá o abrí una cuenta en <a href="https://www.moonpay.com/" rel="noopener">MoonPay</a> (web o app).</li>
      <li>Completá la <a href="https://support.moonpay.com/en/articles/383332-how-to-verify-your-moonpay-account" rel="noopener">verificación de cuenta de MoonPay</a> cuando te la pidan.</li>
      <li><a href="https://www.moonpay.com/buy/usdc" rel="noopener">Comprá USDC</a> hacia una billetera que controles.</li>
      <li>Volvé al cargo de CodeStrux y pagá con esa billetera.</li>
    </ol>
  </div>
</section>

<section class="pane pane--col-4" aria-label="Por qué MoonPay pide KYC">
  <div class="pane__bar"><span class="pane__path">pay/kyc</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> kyc <span class="flag">--why</span></h2>
    <p>MoonPay es un proveedor regulado. Tiene que saber quién compra cripto con tarjeta o con su app — <strong>Know Your Customer</strong>. Es un requisito legal de ellos. No es el login de CodeStrux.</p>
    <p>Pueden pedir un documento oficial, una selfie y a veces comprobante de domicilio o de origen de fondos, según el monto y el país. Guía de <a href="https://support.moonpay.com/en/articles/383332-how-to-verify-your-moonpay-account" rel="noopener">verificación</a> y <a href="https://support.moonpay.com/en/articles/380499-common-rejection-reasons-for-verification-documents" rel="noopener">documentos rechazados</a>.</p>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Páginas oficiales de MoonPay">
  <div class="pane__bar"><span class="pane__path">pay/links</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> ls <span class="arg">moonpay/</span></h2>
    <ul>
      <li><a href="https://www.moonpay.com/" rel="noopener">MoonPay</a></li>
      <li><a href="https://www.moonpay.com/buy/usdc" rel="noopener">Comprar USDC</a></li>
      <li><a href="https://support.moonpay.com/en/articles/383332-how-to-verify-your-moonpay-account" rel="noopener">Verificar la cuenta</a></li>
      <li><a href="https://support.moonpay.com/en/articles/466267-moonpay-commerce-faqs" rel="noopener">Commerce: cómo funciona el pago con tarjeta</a></li>
      <li><a href="https://support.moonpay.com/en/articles/466361-moonpay-commerce-integration-troubleshooting-guide" rel="noopener">Si cobraron la tarjeta y el comercio no recibió el pago</a></li>
    </ul>
  </div>
</section>

<section class="pane pane--col-2" aria-label="Pedir un cargo">
  <div class="pane__bar"><span class="pane__path">~/start</span><span class="pane__dots" aria-hidden="true"><i class="dot dot--a"></i><i class="dot dot--b"></i><i class="dot dot--c"></i></span></div>
  <div class="pane__body">
    <h2 class="cmd-head"><span class="sigil">$</span> mail</h2>
    <p>¿Necesitás un cargo? Escribinos por correo o WhatsApp. Para trabajo a medida enviamos el enlace de MoonPay Commerce; los checkouts de producto usan el mismo canal. Lo completás con billetera, o con tarjeta dentro de MoonPay si el cargo muestra esa opción.</p>
    <p class="hero__cta">
      <a class="btn" href="mailto:{{ site.author.email }}">contact</a>
      <a class="btn btn--ghost" href="https://wa.me/50671789868">WhatsApp</a>
    </p>
  </div>
</section>

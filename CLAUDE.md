# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

CodeStrux Tech's brand site: a bilingual (English + Costa Rican Spanish) Jekyll static site deployed to GitHub Pages at `codestrux.tech`. It also hosts the legal pages (Privacy, Terms, Data Deletion) that are pinned in Meta App Settings for the WhatsApp Business Platform integration.

## Commands

```bash
bundle install                 # installs gems into ./vendor/bundle (see .bundle/config)
bundle exec jekyll serve       # local dev server at http://localhost:4000 with live reload
bundle exec jekyll build       # one-off build into ./_site
```

- **No test suite, linter, or build step beyond Jekyll.** "Verification" means `jekyll build` completes without Liquid/SCSS errors and the change looks right under `jekyll serve` in **both languages**.
- **No Ruby on the machine?** Build in the CI image: `docker run --rm --user $(id -u):$(id -g) -e HOME=/tmp -e BUNDLE_PATH=/gems -e BUNDLE_APP_CONFIG=/tmp/bundle-cfg -v "$PWD":/srv -v <gem-cache-dir>:/gems -v <out-dir>:/site -w /srv ruby:3.4.1 sh -c 'bundle install --quiet && bundle exec jekyll build --destination /site'`.
- **`_config.yml` is NOT live-reloaded**: restart `jekyll serve` after editing it.
- **Ruby version:** Jekyll 4.4 requires Ruby ≥ 3.0. There is no `.ruby-version` and the system Ruby may be too old, so use a version manager (mise/rbenv/asdf/chruby) to get a 3.x/4.x Ruby locally. The local `vendor/bundle` was built with Ruby 4.0.x / bundler 4.0.6; CI (`.github/workflows/jekyll.yml`) pins Ruby **3.4.1** (verify its bundler can install the `Gemfile.lock`'s `BUNDLED WITH` line).
- **Deploy is automatic** via `.github/workflows/jekyll.yml` on push to **`main`** (the prod build runs `jekyll build --baseurl … ` with `JEKYLL_ENV=production`). Feature work happens on branches and ships by merging to `main`.

## Architecture

### Clean-room front end (no theme gem)
The site is a **clean-room custom front end** in the CodeStrux Tech brand (logo system v2, refresh of 2026-11): **full-width bands** of content, with cards only for grids. There is **no theme gem**: `_config.yml` has no `theme:`, and `Gemfile` keeps only `jekyll` + `jekyll-feed`. Local `_layouts` and `_includes` own the whole render:

- **Layouts:** `_layouts/default.html` (HTML5 shell: `head` include, skip-link, header, `<main>`, footer, command-palette include, deferred `terminal.js`), `_layouts/home.html` and `_layouts/page.html` (pass the page's bands through), `_layouts/legal.html` (data-driven legal in a narrow band), `_layouts/redirect.html` (retired permalinks).
- **Includes:** `head.html` (charset/viewport, icons, font preload, stylesheet, `{% feed_meta %}`, then `custom-head.html`); `header.html` (logo, nav, lang switcher, "Contact us" button); `footer.html` (logo + tagline, Company / Services / Legal columns, copyright, location); `logo.html`; `command-palette.html` (keyboard-only palette + a `#palette-commands` JSON island built from `_data/nav.yml`); `stratos-wordmark.html` (the genuine Stratos wordmark, the only Fraunces on the site); `lang-switcher.html`.
- **Styling:** a single **`assets/css/style.scss`**. **Edit it for all styling.**

### Design system: logo, one light theme, self-hosted fonts
- **Logo:** `assets/logo/` holds the logo system v2 files, **unmodified** (rules in `assets/logo/README.txt`: do not recolour, stretch, rotate, outline or add shadows; horizontal lockup at least 120 px wide; favicon files below 32 px). `{% include logo.html %}` renders the `horizontal-tight-light` lockup. The wordmark is outlines, so Bruno Ace SC is not a web font here.
- **One light theme, no dark theme** (removed 2026-11 at the owner's request). There is no `data-theme`, no theme script and no toggle; `<meta name="color-scheme" content="light">` keeps browsers from darkening the page. Do not add a dark theme back without asking.
- **Tokens** are hex, built from the brand colours: Slate `#3B4252`, Secondary `#4B566A`, Shading `#ECEFF4`, Border `#D8DEE9`, Steel blue `#3F6396`, Dark ground `#262C38`, cube face `#A9C1E3`. White bands alternate with Shading (`band--alt`). Every text/ground pair clears WCAG AA.
- **Fonts:** self-hosted latin woff2 under `assets/fonts/`, `font-display: swap`. **Atkinson Hyperlegible** (400, 400 italic, 700) for body and UI, preloaded at 400. **Michroma** (400 only, wide: keep headings short, no synthetic bold) for h1 to h4. **JetBrains Mono** (400/700) only for code, `kbd`, the palette, and the `.prompt` command labels on the exc page. **Fraunces** only for the Stratos guest wordmark, which keeps its own emerald: never recolor it.
- **Page anatomy:** a page body is a list of `<section class="band">` (add `band--alt` on every second one, `band--hero` on the first), each with a `<div class="wrap">`. Inside: an optional `.band__head` (`.eyebrow` + `h2` + intro), then either `.cards` (3 columns; `.cards--2` for 2) of `<article class="card">` with `h3` titles, or a `.split` (`.split__head` with the heading, `.split__body` with the content), or plain prose. Method steps use `<ol class="timeline">`: each `<li class="timeline__step">` has an `h3`, then `.timeline__body` with `.timeline__main` (prose, `ul.tasks` for sub-tasks) and an optional `.timeline__aside` holding `.callout` ("Where you come in") and `.callout--result` ("The result"). Numbers come from a CSS counter. Do not put steps in equal-height cards. Buttons: `.btn`, `.btn--ghost`, `.btn--mono` for literal commands; `.more` for "Read more" links. No panes, window chrome or shell-command labels outside the exc page.
- **Nav:** the header shows the `_data/nav.yml` items with `header: true` (Services, Security, Projects, About). `/exc/` and `/pay/` are reached from in-page links and the palette.
- **Progressive enhancement (`assets/js/terminal.js`, vanilla):** demo-video autoplay, and a command palette opened with Ctrl/Cmd-K or `/` (no visible trigger; focus trap, `Esc` to close, ARIA, restores focus). **All navigation is real `<a>` and works with JS disabled.**

### Copy rules (all non-legal pages, both languages)
From the CodeStrux writing skills (`codestrux-doc`, `codestrux-doc-tecnica-es`):
- **Never the long dash `—`.** Use a period, a colon or a comma.
- Plain language: one idea per sentence, active voice, one term per concept, acronyms expanded on first use, headings that describe the content.
- Write to the client ("you" / "usted"). Spanish uses **usted** on every page (no voseo), es-CR vocabulary, and the institutional cybersecurity terms (hallazgo, criticidad, bastionado, pruebas de penetración).
- **Pitch the method, gently.** The copy sells how CodeStrux works: organized, a fixed sequence of steps with the client's approval at each one. Tone: the client's knowledge is the most important input, and our job is to polish that input until it is exact. Never frame it as duties, requirements or conditions on the client, and no "without this we cannot..." warnings. Each step says what we do, then **Where you come in** (ES: **Su aporte**), then **The result**. Source documents: the two method PDFs ("How to Start a New Reliable System", "How to Do a Security Analysis of Applications and Servers").
- Content is organized around two service lines: **AI Engineering & Software Development** (4-step method on `/services/`) and **Cybersecurity Analysis and Protection Services** (5-step analysis on `/security/`). Do not publish internal tool lists.
- CodeStrux Learn and arayaj.photo are not featured on the site (removed 2026-11 at the owner's request).

### Bilingual "manual mirror"
English is canonical at the root (`/`, `/about/`, `/privacy`, …); Spanish is a hand-maintained mirror under `es/` → `/es/...`. There is no i18n plugin. The convention is enforced by front matter on **every** page:

- `lang:` — `en` or `es-CR`.
- `alt_url:` — the paired page in the other language (drives the language switcher and `hreflang`).
- `ref:` — stable page identity shared across both languages.
- `permalink:` — explicit, since pages live in language-specific folders.

UI strings (nav, footer, legal labels, palette strings) live in **`_data/i18n.yml`** as two parallel blocks, `en` and `es-CR`. Templates read `site.data.i18n[page.lang]` with an `.en` fallback and derive a URL prefix (`base` = `/es` or empty) from `page.lang`. **Every key must exist in both language blocks**: adding a string means adding it twice. The local `header.html`/`footer.html`/`lang-switcher.html`/`command-palette.html` are all language-aware so the `/es/` tree never leaks into the English nav and vice versa. Nav links + palette commands share one source of truth in **`_data/nav.yml`** (the header renders them and the palette serializes them into its JSON island). **Shell commands stay in English in both languages** (the `.prompt` labels and palette commands: `ls services/`, `cat about.md`); only prose is localized.

### Data-driven legal documents
Legal content is **data, not markup**. The three docs (`privacy`, `terms`, `data-deletion`) keep all their content in `_data/legal/<doc>.yml`, again as parallel `en` / `es-CR` blocks (`title`, `summary`, `effective_date`, `intro[]`, `sections[]` with `id`/`heading`/`paragraphs[]`/`bullets[]`/`steps[]`).

The page files (`privacy.markdown`, `es/privacy.markdown`, `terms.markdown`, …) are **front-matter only, no body**: `layout: legal` + `doc: <stem>`. `_layouts/legal.html` includes `_includes/legal-doc.html`, which renders `site.data.legal[page.doc][page.lang]`. Key rules:

- `page.doc` is always **bracket-accessed** because `data-deletion` is hyphenated.
- Section `id`s are **shared across languages** so in-page anchors stay stable.
- The privacy doc's `deletion` section auto-appends a localized link to the Data Deletion page.
- **To change legal copy, edit the YAML (both language blocks)** — never the `.markdown` files.

### Head / SEO
`_includes/head.html` does `{% feed_meta %}` (jekyll-feed) then `{% include custom-head.html %}`. There is no SEO plugin, so `_includes/custom-head.html` emits `<title>`, meta description, canonical URL, and `hreflang` alternates (wired through `alt_url`) itself — **this chain is load-bearing and preserved verbatim**. The **Facebook domain-verification** meta tag is intentionally scoped to the two home pages only (`/` and `/es/`) per Meta's requirement — don't widen that condition.

## Conventions & gotchas

- **Compliance surface:** the legal pages exist to satisfy Meta/WhatsApp Business Platform requirements; the Privacy and Data Deletion URLs are referenced from Meta App Settings. The entity is "CodeStrux Tech", the Meta app is the "CodeStrux Tech App", contact is `privacy@codestrux.tech`. Treat edits to these as content with legal weight — keep `en` and `es-CR` in sync and update `effective_date` on material changes.
- When adding a page, add **both** language versions, set all four front-matter keys (`lang`/`alt_url`/`ref`/`permalink`), and wire any new UI strings into both blocks of `_data/i18n.yml`.
- `_site/`, `vendor/`, `.bundle/`, and `.jekyll-cache/` are generated/local and gitignored — never edit them by hand.

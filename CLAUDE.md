# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

CodeStrux Tech's brand site: a bilingual (English + Costa Rican Spanish) Jekyll static site deployed to GitHub Pages at `codestrux.tech`. It also hosts the legal pages (Privacy, Terms, Data Deletion) that are pinned in Meta App Settings for the WhatsApp Business Platform integration.

## Commands

```bash
bundle install                 # installs gems into ./vendor/bundle (see .bundle/config)
bundle exec jekyll serve       # local dev server at http://localhost:4000 with live reload
bundle exec jekyll build       # one-off build into ./_site
```

- **No test suite, linter, or build step beyond Jekyll.** "Verification" means `jekyll build` completes without Liquid/SCSS errors and the change looks right under `jekyll serve` in **both themes and both languages**.
- **`_config.yml` is NOT live-reloaded** — restart `jekyll serve` after editing it.
- **Ruby version:** Jekyll 4.4 requires Ruby ≥ 3.0. There is no `.ruby-version` and the system Ruby may be too old, so use a version manager (mise/rbenv/asdf/chruby) to get a 3.x/4.x Ruby locally. The local `vendor/bundle` was built with Ruby 4.0.x / bundler 4.0.6; CI (`.github/workflows/jekyll.yml`) pins Ruby **3.4.1** (verify its bundler can install the `Gemfile.lock`'s `BUNDLED WITH` line).
- **Deploy is automatic** via `.github/workflows/jekyll.yml` on push to **`main`** (the prod build runs `jekyll build --baseurl … ` with `JEKYLL_ENV=production`). Feature work happens on branches and ships by merging to `main`.

## Architecture

### Clean-room "bento terminal" front end (no theme gem)
The site is a **clean-room custom front end** — a unix-terminal / tiling-window-manager skin laid out as a **bento grid of panes**. There is **no theme gem** (the old `jekyll-nord-theme` was dropped): `_config.yml` has no `theme:`, and `Gemfile` keeps only `jekyll` + `jekyll-feed`. Local `_layouts` and `_includes` own the whole render:

- **Layouts:** `_layouts/default.html` (HTML5 shell — `<html data-theme>`, `head` include, skip-link, header, `<main class="shell">`, footer, command-palette include, deferred `terminal.js`), `_layouts/home.html` (bento grid container), `_layouts/page.html` (content pane), `_layouts/legal.html` (data-driven legal, unchanged in logic).
- **Includes:** `head.html` (charset/viewport, font preloads, **inline no-FOUC theme script before the stylesheet**, stylesheet, `{% feed_meta %}`, then `custom-head.html`); `header.html` (terminal top bar — brand, path-style language-aware nav, theme toggle, ⌘K hint, lang switcher); `footer.html` (terminal footer pane); `terminal-pane.html` (reusable pane partial); `command-palette.html` (the ⌘K palette markup + a `#palette-commands` JSON island built from `_data/nav.yml`); `stratos-wordmark.html` (the genuine Stratos wordmark — the only Fraunces on the site); `lang-switcher.html`.
- **Styling:** a single fresh **`assets/css/style.scss`** (no `@import "initialize"`). **Edit `assets/css/style.scss` for all styling.** `assets/main.scss` was deleted.

### Design system — dual theme + self-hosted fonts
- **Dual theme:** `:root[data-theme="dark"]` (default: navy grounds, bone accent) and `[data-theme="light"]` ("ice": cool blue-white grounds, navy accent) token layers, persisted to `localStorage` key **`codestrux-theme`**. The **inline `<head>` script** in `head.html` sets `data-theme` from `localStorage` → `prefers-color-scheme` **before the stylesheet** to avoid FOUC — keep it inline and never defer it; keep its `STORAGE_KEY` in sync with `assets/js/terminal.js`.
- **Fonts:** self-hosted subset woff2 under `assets/fonts/` — **JetBrains Mono** (400/500/700/800) everywhere, **Fraunces** only for the Stratos guest wordmark. `@font-face` uses `font-display: swap`; the 400 weight is preloaded.
- **Tokens** are OKLCH (navy hue ~258 grounds/ink, bone hue ~90 accent in dark; old-gold/ice-blue/slate as sparing syntax pops); `--radius` ~10px, soft "window" pane chrome with brand-tinted traffic-light dots (deliberately diverges from the Stratos zero-radius/hard-shadow language). The Stratos guest wordmark keeps its own emerald — never recolor it. The **`codestrux-design-language` skill** (`~/work/self/claude-code-skills/`) codifies the full fingerprint.
- **Progressive enhancement (`assets/js/terminal.js`, vanilla):** theme toggle (persist), a reduced-motion-aware boot/typewriter reveal, and a **⌘K / `/` command palette** (bounded command set, focus trap, `Esc` to close, ARIA, restores focus, visible touch affordance). **Real `<a>`/`<button>` nav works with JS disabled** — the palette is never the only path. All motion is gated behind `prefers-reduced-motion`.

### Bilingual "manual mirror"
English is canonical at the root (`/`, `/about/`, `/privacy`, …); Spanish is a hand-maintained mirror under `es/` → `/es/...`. There is no i18n plugin. The convention is enforced by front matter on **every** page:

- `lang:` — `en` or `es-CR`.
- `alt_url:` — the paired page in the other language (drives the language switcher and `hreflang`).
- `ref:` — stable page identity shared across both languages.
- `permalink:` — explicit, since pages live in language-specific folders.

UI strings (nav, footer, legal labels, shell/palette/theme strings) live in **`_data/i18n.yml`** as two parallel blocks, `en` and `es-CR`. Templates read `site.data.i18n[page.lang]` with an `.en` fallback and derive a URL prefix (`base` = `/es` or empty) from `page.lang`. **Every key must exist in both language blocks** — adding a string means adding it twice. The local `header.html`/`footer.html`/`lang-switcher.html`/`command-palette.html` are all language-aware so the `/es/` tree never leaks into the English nav and vice versa. Nav links + palette commands share one source of truth in **`_data/nav.yml`** (the header renders them and the palette serializes them into its JSON island). **Shell commands stay in English in both languages** (universal shell: `$ ls services/`, `$ cat about.md`); only prose is localized.

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

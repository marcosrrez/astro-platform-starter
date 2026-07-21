# Florecer Mind

**Where Research Blooms into Wisdom**

Florecer Mind is a research-focused blog and newsletter that transforms complex academic research from counseling, neuroscience, and cognitive science into accessible, practical wisdom for everyday people and mental health professionals.

Built with [Astro](https://astro.build/), styled with [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/), and deployed on [Netlify](https://www.netlify.com/).

- **Live site:** https://getflorecer.com
- **Newsletter:** Research Rescue Weekly (evidence-based insights, every Monday)
- **Contact:** marcos@getflorecer.com

## What this project is

- **Research Spotlights** — deep-dives into specific studies, written as accessible Markdown articles with cited sources, further reading, and related videos.
- **Research Rescue Weekly** — a newsletter (delivered via ConvertKit/Kit) that surfaces the latest spotlight and practical takeaways.
- **Resources** — a curated directory of therapy finders, crisis lines, and evidence-based learning resources.

## Technology stack

| Area | Tool |
| :--- | :--- |
| Framework | Astro 4 (hybrid rendering) |
| Styling | Tailwind CSS 3 + daisyUI (custom `florecer` theme) |
| Content | Astro Content Collections (Markdown, typed via Zod) |
| Interactive islands | React 18 (via `@astrojs/react`) |
| Fonts | Inter (body) + Crimson Pro (headings), self-hosted via Fontsource |
| Feeds & SEO | `@astrojs/rss`, `@astrojs/sitemap`, JSON-LD structured data |
| Hosting | Netlify (`@astrojs/netlify` adapter, Netlify Blobs, Functions) |

## Local development

### Prerequisites

- [Node.js](https://nodejs.org/) v18.14+
- (optional) [nvm](https://github.com/nvm-sh/nvm) for Node version management

### Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

### Available commands

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`        |
| `npm run preview` | Preview the production build locally          |
| `npm run astro`   | Run Astro CLI commands                        |

## Project structure

```
├── src/
│   ├── components/          # Reusable Astro components (Header, Footer, Logo, Card, …)
│   ├── content/
│   │   ├── blog/            # Research spotlights (Markdown) — the content source
│   │   └── config.ts        # Content Collection schema (categories, sources, etc.)
│   ├── layouts/
│   │   └── Layout.astro     # Base layout: <head>, SEO meta, Open Graph, fonts
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # About page
│   │   ├── resources.astro  # Resources directory
│   │   ├── newsletter.astro # Newsletter signup (ConvertKit)
│   │   ├── blog/
│   │   │   ├── index.astro   # Spotlight index + category/tag filtering
│   │   │   └── [slug].astro  # Individual spotlight (renders Markdown)
│   │   ├── rss.xml.ts        # RSS feed
│   │   └── api/              # Netlify serverless endpoints (blobs, revalidate)
│   └── styles/
│       └── globals.css      # Base typography + component styles
├── public/                  # Static assets (favicon, OG image, robots.txt)
├── astro.config.mjs         # Astro configuration
└── tailwind.config.mjs      # Tailwind + daisyUI theme
```

## Adding a research spotlight

Articles are managed as Markdown files through Astro Content Collections — no code changes required to publish.

1. Create a new `.md` file in `src/content/blog/`.
2. Start from `.templates/article-template.md` and fill in the frontmatter. The schema is enforced in `src/content/config.ts`:

   ```yaml
   ---
   title: "Compelling, specific title"
   description: "1–2 sentence summary (120–155 characters)"
   pubDate: 2026-01-15
   category: "Neuroscience"          # one of the 5 defined categories
   tags: ["neuroplasticity", "habits"]
   sources:                           # peer-reviewed / primary sources
     - title: "Full study title (Author et al., Year)"
       url: "https://doi.org/..."
       type: "study"
   ---
   ```

3. Write the article following the structure in [`BRAND_GUIDE.md`](./BRAND_GUIDE.md): opening hook → The Research → Practical Applications → For Counselors (if applicable) → Key Takeaways.
4. Run the [Publication Checklist](./BRAND_GUIDE.md#publication-checklist) before shipping.

The post is automatically listed on the homepage, the `/blog` index, the RSS feed, and the sitemap on the next build.

### Automated weekly spotlights

A weekly research pipeline is documented in [`.claude/weekly-research-pipeline.md`](./.claude/weekly-research-pipeline.md). It produces a fully-cited spotlight draft and opens a pull request for human review before anything goes live.

## Brand & design

The single source of truth for voice, color, typography, and components is:

- [`BRAND_GUIDE.md`](./BRAND_GUIDE.md) — brand identity, voice, colors, content guidelines, publication checklist.
- [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — page/component patterns and layout conventions.

At a glance:

- **Primary:** Forest Green `#2F5233` · **Secondary:** Sage Green `#A8B5A0` · **Background:** Cream `#FAFAF9`
- **Headings:** Crimson Pro (serif) · **Body:** Inter (sans-serif)
- **Voice:** warm but authoritative, evidence-based but accessible

## Deployment

The site is configured for Netlify. Connecting the repository enables automatic deploys on push to `main`.

- **Custom domain:** configured in Netlify → Site Settings → Domain Management (`getflorecer.com`).
- **Newsletter:** the signup form on `/newsletter` posts to ConvertKit/Kit form `8810669`.

## License

© 2026 Florecer Mind. All rights reserved.

# Florecer Mind

**Where Research Blooms into Wisdom**

A modern website built with Astro.js, Tailwind CSS, and deployed on Netlify. Florecer Mind transforms complex academic research from counseling, neuroscience, and cognitive science into accessible, practical wisdom.

## Project Overview

Florecer Mind is a research-focused blog and newsletter platform dedicated to:
- Making academic research accessible to everyday people and counselors
- Providing evidence-based insights without the jargon
- Offering practical applications of scientific findings
- Building a community around evidence-based personal growth

## Technology Stack

- **Astro.js** - Modern static site framework
- **Tailwind CSS** - Utility-first CSS framework
- **daisyUI** - Component library
- **Netlify** - Hosting and deployment platform

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) v18.14+
- (optional) [nvm](https://github.com/nvm-sh/nvm) for Node version management

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Site Structure

```
├── src/
│   ├── components/       # Reusable Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/
│   │   ├── index.astro   # Homepage
│   │   ├── about.astro   # About page
│   │   ├── newsletter.astro  # Newsletter signup
│   │   └── blog/         # Research spotlights
│   └── styles/           # Global styles
├── public/               # Static assets
└── astro.config.mjs      # Astro configuration
```

## Content Management

### Adding Blog Posts

Blog posts are currently static pages. To add a new research spotlight:

1. Create a new `.astro` file in `src/pages/blog/`
2. Use the existing post template as a reference
3. Add the post to the blog index listing

**Future Enhancement**: Implement Astro Content Collections or connect a headless CMS for easier content management.

## Design System

### Brand Colors

- **Primary**: Deep forest green (#2F5233)
- **Secondary**: Soft sage (#A8B5A0)
- **Background**: Warm off-white (#FAFAF9)

### Typography

- **Font**: Inter
- **Style**: Clean, generous spacing, Apple-inspired minimalism

## Deploying to Netlify

This site is configured for deployment on Netlify. Connect your repository to Netlify for automatic deployments on push.

### Domain Configuration

To connect your custom domain (getflorcer.com):
1. Go to Netlify Dashboard → Site Settings → Domain Management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

## Next Steps for Development

### Newsletter Integration

The newsletter signup form is currently a placeholder. To activate:
1. Sign up for ConvertKit or Mailchimp
2. Update the form action in `src/pages/newsletter.astro`
3. Add the API endpoint from your email service provider

### Content Collections

Consider implementing Astro Content Collections for better blog post management:
- Create `src/content/` directory
- Define collection schema
- Update blog pages to use collections API

### Additional Features to Consider

- Search functionality for research spotlights
- Categories and tags for blog posts
- Related posts recommendations
- Comment system or discussion forum
- RSS feed for blog content

## Brand Voice

When creating content, maintain:
- **Approachable yet credible** tone
- **Evidence-based** information with citations
- **Practical and action-oriented** takeaways
- **Inclusive and non-judgmental** language

## License

© 2024 Florecer Mind. All rights reserved.

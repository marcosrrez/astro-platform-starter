import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://getflorecer.com',
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false
        }),
        sitemap()
    ],
    output: 'hybrid',
    adapter: netlify()
});

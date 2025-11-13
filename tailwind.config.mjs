/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const fs = require('fs');

const noiseBitmap = fs.readFileSync('./src/assets/noise.png', { encoding: 'base64' });
const noiseDataUri = 'data:image/png;base64,' + noiseBitmap;

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': `linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('${noiseDataUri}')`
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Crimson Pro', ...defaultTheme.fontFamily.serif]
            },
            lineHeight: {
                'relaxed': '1.75',
                'loose': '1.8'
            },
            letterSpacing: {
                'wide': '0.02em'
            }
        }
    },
    daisyui: {
        themes: [
            {
                florecer: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2F5233',
                    'primary-content': '#FAFAF9',
                    secondary: '#A8B5A0',
                    'secondary-content': '#1f1f1f',
                    accent: '#A8B5A0',
                    neutral: '#FAFAF9',
                    'base-100': '#FAFAF9',
                    'base-200': '#f5f5f4',
                    'base-300': '#e7e5e4',
                    info: '#2F5233',
                    'info-content': '#FAFAF9'
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};

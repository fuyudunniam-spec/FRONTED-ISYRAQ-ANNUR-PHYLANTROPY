/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Palet Isyraq An-Nur: Deep Navy & Gold
                royal: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49', // Warna Utama (Deep Navy)
                    brand: '#0f172a' // Slate 900 untuk kontras
                },
                gold: {
                    100: '#fef9c3',
                    400: '#d4af37', // Emas Klasik
                    500: '#b4941f',
                    600: '#8c7318'
                },
                paper: '#F8FAFC', // Slate-50 (Putih Sejuk)
            },
            fontFamily: {
                // Pastikan Anda sudah import font ini di head Astro
                sans: ['"Cormorant Garamond"', 'serif'],
                display: ['"Cinzel"', 'serif'],
            },
            borderRadius: {
                '4xl': '2.5rem',
                '5xl': '3rem'
            }
        },
    },
    plugins: [],
}
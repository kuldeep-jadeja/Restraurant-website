/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                midnight: '#0A0F1F',
                champagne: '#D4BA8A',
                blanc: '#FAF8F5',
                slate: '#2B2D3A',
                'champagne-light': '#E8D5B0',
                'midnight-light': '#141A2E',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                cormorant: ['"Cormorant Garamond"', 'serif'],
            },
            borderRadius: {
                'xl-2': '1.5rem',
                '3xl': '3rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

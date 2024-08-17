/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            dark: '#131319',
            card: '#27292D',
            gray: {
                100: '#35373B',
                200: '#6B6C70',
                300: '#7F8084',
                500: '#C5C7CA'
            },
            primary: '#4A96FF'
        },
        fontFamily: {
            sans: ['Inter']
        },
        fontSize: {
            xs: ['12px', '15px'],
            sm: ['14px', '17px'],
            base: ['16px', '19px'],
            lg: ['18px', '22px']
        }
    },
    plugins: []
}

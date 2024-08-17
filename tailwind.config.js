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
            post: '#191920',
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
            lg: ['18px', '22px'],
            '2xl': ['28px', '34px']
        }
    },
    plugins: [
        ({ addUtilities }) => {
            addUtilities({
                '.gradient-border': {
                    position: 'relative',
                    boxSizing: 'border-box',
                    backgroundClip: 'padding-box',
                    border: 'solid 2px transparent'
                },
                '.gradient-border:before': {
                    content: "''",
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    zIndex: '-1',
                    margin: '-2px',
                    borderRadius: 'inherit',
                    background: 'linear-gradient(140deg, #969696, #343434)'
                }
            })
        }
    ]
}

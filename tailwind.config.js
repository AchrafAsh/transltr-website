const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            ...colors,
            gray: colors.blueGray
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
}

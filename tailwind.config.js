const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(({ addVariant, e }) => {
            addVariant('before', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`before${separator}${className}`)}::before`;
                });
            });
            addVariant('after', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`after${separator}${className}`)}::after`;
                });
            });
        }),
        plugin(({ addUtilities }) => {
            const contentUtilities = {
                '.content': {
                    content: 'attr(data-content)',
                },
                '.content-before': {
                    content: 'attr(data-before)',
                },
                '.content-after': {
                    content: 'attr(data-after)',
                },
            };

            addUtilities(contentUtilities, ['before', 'after']);
        }),
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow': {
                    textShadow: '0px 2px 3px black',
                },
                '.text-shadow-md': {
                    textShadow: '0px 3px 3px black',
                },
                '.text-shadow-lg': {
                    textShadow: '0px 5px 3px black',
                },
                '.text-shadow-xl': {
                    textShadow: '0px 7px 3px black',
                },
                '.text-shadow-2xl': {
                    textShadow: '0px 10px 3px black',
                },
                '.text-shadow-none': {
                    textShadow: 'none',
                },
            };

            addUtilities(newUtilities);
        },
    ],
};

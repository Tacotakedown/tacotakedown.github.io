import svgToDataUri from "mini-svg-data-uri";

import {default as flattenColorPalette} from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{tsx,ts}"],
    theme: {
        extend: {
            animation: {
                scroll:
                    "scroll 15s var(--animation-direction, forwards) ease-in-out infinite",
                scrollMini: "scrollMini 5s var(--animation-direction, forwards) ease-in-out infinite",
            },
            boxShadow: {
                input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
            },
            keyframes: {
                scroll: {
                    "0%": {transform: "translate(0px)"},
                    "50%": {transform: "translate(var(--container-width))"},
                    "100%": {transform: "translate(0px)"},

                },
                scrollMini: {
                    "0%": {transform: "translate(0%)"},
                    "50%": {transform: "translate(--container-width)"},
                    "100%": {transform: "translate(0%)"},
                }
            }
        },
    },
    plugins: [
        addVariablesForColors,
        function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    "bg-dot-thick": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
                        )}")`,
                    }),
                },
                {values: flattenColorPalette(theme("backgroundColor")), type: "color"}
            );
        },
    ],
};

function addVariablesForColors({addBase, theme}) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

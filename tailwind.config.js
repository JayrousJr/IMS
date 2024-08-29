import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        fontSize: {
            xs: ["12px", "16px"],
            sm: ["14px", "20px"],
            base: ["16px", "19.5px"],
            lg: ["18px", "21.94px"],
            xl: ["20px", "24.38px"],
            "2xl": ["24px", "29.26px"],
            "3xl": ["28px", "50px"],
            "4xl": ["48px", "58px"],
            "8xl": ["96px", "106px"],
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "dark-100": "#121212",
                "dark-200": "#212121",
                "dark-300": "#2f2f2f",
                primary: "#a688fa",
                write: "#ececec",
                "text-gray": "rgb(209 213 219)",
                tertiary: "#373737",
            },
        },
    },

    plugins: [forms],
};

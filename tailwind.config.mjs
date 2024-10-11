/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors:{
                primary:"#00C189"
            },
            fontFamily:{
                "kelsi":"Kelsi",
                "general":"GeneralSans",
                "yasashisa":"YasashisaAntique",
                "roboto":"Roboto",
            },
            fontSize:{
                // Desktop
                "desktop-lg":"160px",
                "desktop-md":"105px",
                "desktop-sm":"71px",
                "desktop-h1":"50px",
                "desktop-h2":"37px",
                "desktop-h3":"29px",
                "desktop-h4":"24px",
                "desktop-h5":"21px",
                "desktop-h6":"19px",

                // Tablet
                "tablet-lg":"105px",
                "tablet-md":"71px",
                "tablet-sm":"50px",
                "tablet-h1":"37px",
                "tablet-h2":"29px",
                "tablet-h3":"24px",
                "tablet-h4":"21px",
                "tablet-h5":"19px",
                "tablet-h6":"18px",

                // Mobile
                "mobile-lg":"71px",
                "mobile-md":"50px",
                "mobile-sm":"37px",
                "mobile-h1":"29px",
                "mobile-h2":"42px",
                "mobile-h3":"21px",
                "mobile-h4":"19px",
                "mobile-h5":"18px",
                "mobile-h6":"17px",

                "body":"16px",
                "caption":"14px",
                "footnote":"12px",
            }
        },
    },
    plugins: [],
}

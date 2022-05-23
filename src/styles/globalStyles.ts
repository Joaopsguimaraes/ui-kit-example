import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    "@import": "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Poppins:wght@400;500;700;900&family=Roboto:wght@400;500;700;900&display=swap')",
    "*":{
        margin:0,
        padding:0,
        boxSizing: "border-box"
    },
    "body":{
        background: '#fefefe',
    }
})

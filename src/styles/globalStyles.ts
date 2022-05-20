import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    "*":{
        margin:0,
        padding:0,
        boxSizing: "border-box"
    },
    "body":{
        background: "hsl(0, 0%, 99.0%)",
    }
})

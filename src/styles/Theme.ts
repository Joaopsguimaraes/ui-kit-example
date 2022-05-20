import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import { gray, blue, indigo} from "@radix-ui/colors";

export const { styled, css } = createStitches({
    theme:{
        colors:{
            ...gray,
            ...blue,
            ...indigo,
        },
        space:{
            "px": "1px",
            1: '0.25rem',//4px
            2: '0.5rem',//8px
            3: '0.75rem',//12px
            4: '1rem',//16px
            5: '1.25rem',//20px
            6: '1.5rem',//24px
            7: '1.75rem',//28px
            8: '2rem',//32px
            9: '2.25rem',//36px
            10: '2.5rem',//40px
            12: '3rem',//48px
            16: '4rem',//64px
            20: '5rem',//80px
            40: '10rem',//160px 
            64: '16rem',//256px
            80: '20rem',//320px

        },
        fontSizes:{
            xxs: '0.625rem',//10px
            xs: '0.75rem',//12px
            sm: '0.875rem',//14px
            md: '1rem',//16px
            lg: '1.125rem',//18px
            xl: '1.25rem',//20px
            '2xl': '1.5rem',//24px
            '4xl': '2rem',//32px
            '5xl': '2.25rem',//36px
            '6xl': '3rem',//48px
            '7xl': '4rem',//64px
            '8xl': '4.5rem',//72px
            '9xl': '6rem',//96px
        },
        fonts:{
            inter: "'Inter', sans-serif",
            poppins: "'Poppins', sans-serif",
            roboto: "'Roboto', sans-serif",
        },
        fontWeights:{
            regular: "400",
            medium: "500",
            bold: "700",
            black: "900",
        },
        lineHeights:{
            shorter:'125%',
            short: '140%',
            basic:'160%',
            tall: '180%',
        },
        sizes:{
            px: "1px",
            1: '0.25rem',//4px
            2: '0.5rem',//8px
            3: '0.75rem',//12px
            4: '1rem',//16px
            5: '1.25rem',//20px
            6: '1.5rem',//24px
            7: '1.75rem',//28px
            8: '2rem',//32px
            9: '2.25rem',//36px
            10: '2.5rem',//40px
            12: '3rem',//48px
            16: '4rem',//64px
            20: '5rem',//80px
            40: '10rem',//160px 
            64: '16rem',//256px
            80: '20rem',//320px
        },
        borderWidths:{
            thin:'1px',
            medium:'1.5px',
            thick:'2px',
            heavy:'4px',
        },
        borderStyles:{
            none:"none",
            solid:"solid",
            dashed:"dashed",
            dotted:"dotted",
            double:"double",
            hidden:"hidden",

        },
        radii:{
            xs: '2.5px',
            sm: '5px',
            md: '10px',
            lg: '20px',
            full: '99999px'
        },
        shadows:{
            shadowSm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",
            shadow:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            shadowMd:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            shadowLg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            shadowXl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
        opacity: {
            default: '100%',
            semiOpaque: '90%',
            intense: '75%',
            medium: '50%',
            light: '25%',
            semiTransparent: '10%',
        },
        zIndices:{
            overlay: 9995,
            modal: 9999,
        },
        media:{
            mobile: '(max-width: 768px)',
        },
        transitions:{
            true:"all 400ms ease-in-out",
        },
    }

})
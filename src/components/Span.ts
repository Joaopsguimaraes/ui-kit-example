import { styled } from "../styles/Theme";

export const Span = styled("span",{
    variants:{
        color:{
            blue:{
                color:"$blue11"
            },
            gray:{
                color:"$gray11"
            },
            indigo:{
                color:"$indigo11"
            }
        },
        fontWeight:{
            true:{
                fontWeight:"bold"
            }
        }
    }
});
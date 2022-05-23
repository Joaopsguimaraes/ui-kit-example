import { styled } from "../styles/Theme";

export const Span = styled("span",{
    variants:{
        color:{
            blue:{
                color:"$blue11"
            },
            darkBlue: {
                color:"$blue12"
            },
            gray:{
                color:"$gray11"
            },
            indigo:{
                color:"$indigo11"
            },
            darkIndigo: {
                color:"$indigo12"
            }
        },
        fontWeight:{
            bold:{
                fontWeight:"bold"
            },
            black:{
                fontWeight:"$black"
            }
        }
    }
});
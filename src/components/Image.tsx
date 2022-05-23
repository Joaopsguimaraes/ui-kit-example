import { styled } from "../styles/Theme";

export const Image = styled("img",{
    width:"auto",
    height:"auto",
    variants:{
        size:{
            sm:{
                width:"$20",
                height: "auto"
            },
            md:{
                width:"$40",
                height: "auto"
            },
            lg:{
                width:"$64",
                height: "auto"
            },
            xl:{
                width:"$80",
                height: "auto"
            }
        }
    }
})
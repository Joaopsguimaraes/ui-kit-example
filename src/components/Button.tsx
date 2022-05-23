import { styled } from "../styles/Theme";

export interface ButtonProps{
  label?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "lg" | "xlg";
  color?: "blue" | "gray" | "indigo" | "darkIndigo" | "darkBlue";
  rounded?: "none" | "sm" | "lg" | "xs" | "full";
  shadow?: "sm" | "md" | "lg" | "xl";
  width?: "sm" | "md" | "lg" | "xlg" | "auto" | "full";
  children?: React.ReactNode;
  style?: any;

}


export const ButtonStyle = styled("button", {
  width: "$auto",
  cursor: "pointer",
  padding: "$2",
  fontSize: "$md",
  fontWeight: "$medium",
  fontFamily: "$roboto",
  display:"flex",
  alignItems:"center",
  gap: "0.25rem",
  variants: {
    size: {
      sm: {
        width: "$auto",
        padding: "$1",
        fontSize: "$sm",
      },
      lg: {
        width: "$auto",
        padding: "$2",
        fontSize: "$md",
      },
      xlg: {
        width: "$auto",
        padding: "$4",
        fontSize: "$xl",
      },
    },
    color: {
      blue: {
        background: "$blue3",
        color: "$blue11",
        borderColor: "$blue7",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover": {
          background: "$blue5",
          color: "$blue11",
          borderColor: "$blue7",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
        "&:focus": {
          background: "$blue5",
          color: "$blue11",
          borderColor: "$blue7",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
      },
      darkBlue: {
        background: "$blue9",
        color: "$blue2",
        borderColor: "$blue10",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover": {
          background: "$blue10",
          color: "$blue2",
          borderColor: "$blue11",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
        "&:focus": {
          background: "$blue10",
          color: "$blue2",
          borderColor: "$blue11",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
      },
      gray: {
        background: "$gray3",
        color: "$gray12",
        borderColor: "$gray6",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover": {
          background: "$gray5",
          color: "$gray12",
          borderColor: "$gray6",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
        "&:focus": {
          background: "$gray5",
          color: "$gray12",
          borderColor: "$gray7",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
      },
      indigo: {
        background: "$indigo3",
        color: "$indigo11",
        borderColor: "$indigo6",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover": {
          background: "$indigo5",
          color: "$indigo11",
          borderColor: "$indigo7",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
        "&:focus": {
          background: "$indigo5",
          color: "$indigo11",
          borderColor: "$indigo7",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
      },
      darkIndigo: {
        background: "$indigo10",
        color: "$indigo1",
        borderColor: "$indigo11",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover, &:focus": {
          background: "$indigo11",
          color: "$indigo2",
          transition: "$true",
        },
      },
    },
    variant: {
      solid:{

      },
      outline: {
        background: "transparent",
      },
      ghost: {
        background: "transparent",
        border: "transparent",
        fontWeight:"$bold",
        "&:hover, &:focus": {
          border: "transparent",
        }
      },
    },
    rounded: {
      none: {
        borderRadius: "none",
      },
      sm: {
        borderRadius: "$sm",
      },
      lg: {
        borderRadius: "$lg",
      },
      xs: {
        borderRadius: "$xs",
      },
      full: {
        borderRadius: "$full",
      },
    },
    shadow: {
      sm: {
        boxShadow: "$shadowSm",
      },
      md: {
        boxShadow: "$shadowMd",
      },
      lg: {
        boxShadow: "$shadowLg",
      },
      xl: {
        boxShadow: "$shadowXl",
      },
    },
    width: {
      sm: {
        width: "20%",
      },
      md: {
        width: "40%",
      },
      lg: {
        width: "60%",
      },
      xlg: {
        width: "80%",
      },
      auto: {
        width: "auto",
      },
      full: {
        width: "100%",
      },
    },
    height: {
      sm: {
        height: "20%",
      },
      md: {
        height: "40%",
      },
      lg: {
        height: "60%",
      },
      xlg: {
        height: "80%",
      },
      auto: {
        height: "auto",
      },
      full: {
        height: "100%",
      },
    },
    margin: {
      "my-1": {
        marginTop: "$4",
        marginBottom: "$4",
      },
      "mx-1": {
        marginLeft: "$4",
        marginRight: "$4",
      },
      "m-1": {
        margin: "$4",
      },
      center: {
        margin: "auto",
      },
    },
    marginTop: {
      1: {
        marginTop: "$4",
      },
      2: {
        marginTop: "$6",
      },
      3: {
        marginTop: "$8",
      },
    },
    marginBottom: {
      1: {
        marginBottom: "$4",
      },
      2: {
        marginBottom: "$6",
      },
      3: {
        marginBottom: "$8",
      },
    },
    marginLeft: {
      1: {
        marginLeft: "$4",
      },
      2: {
        marginLeft: "$6",
      },
      3: {
        marginLeft: "$8",
      },
    },
    marginRight: {
      1: {
        marginRight: "$4",
      },
      2: {
        marginRight: "$6",
      },
      3: {
        marginRight: "$8",
      },
    },
    paddingBottom: {
      1: {
        paddingBottom: "$4",
      },
      2: {
        paddingBottom: "$6",
      },
      3: {
        paddingBottom: "$8",
      },
    },
    paddingTop: {
      1: {
        paddingTop: "$4",
      },
      2: {
        paddingTop: "$6",
      },
      3: {
        paddingTop: "$8",
      },
    },
    paddingLeft: {
      1: {
        paddingLeft: "$4",
      },
      2: {
        paddingLeft: "$6",
      },
      3: {
        paddingLeft: "$8",
      },
    },
    paddingRight: {
      1: {
        paddingRight: "$4",
      },
      2: {
        paddingRight: "$6",
      },
      3: {
        paddingRight: "$8",
      },
    },
    padding: {
      "py-1": {
        paddingTop: "$4",
        paddingBottom: "$4",
      },
      "px-1": {
        paddingLeft: "$4",
        paddingRight: "$4",
      },
      "p-1": {
        padding: "$4",
      },
    },
    alignSelf: {
      start: {
        alignSelf: "flex-start",
      },
      end: {
        alignSelf: "flex-end",
      },
      center: {
        alignSelf: "center",
      },
      baseline: {
        alignSelf: "baseline",
      },
      stretch: {
        alignSelf: "stretch",
      },
    },
  },
});

export function Button({label, variant, size, color, rounded, children}:ButtonProps){
  return(
    <ButtonStyle
      variant={variant}
      size={size}
      color={color}
      rounded={rounded}
    >
      {label}
      {children}
    </ButtonStyle>
  )
}


import { styled } from "../styles/Theme";

export const ButtonStyle = styled("button", {
  width: "$auto",
  cursor: "pointer",
  padding: "$2",
  fontSize: "$md",
  fontWeight: "$regular",
  fontFamily: "$roboto",
  display: "flex",
  alignItems: "center",
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
        padding: "$3",
        fontSize: "$lg",
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
        borderColor: "$blue8",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover , &:focus": {
          background: "$blue5",
          borderColor: "$blue9",
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
        "&:hover, &:focus": {
          background: "$gray5",
          borderColor: "$gray8",
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
        "&:hover, &:focus": {
          background: "$indigo5",
          borderColor: "$indigo8",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
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
    variant: {
      solid: {},
      outline: {
        background: "none",
      },
      ghost: {
        background: "none",
        fontWeight: "$bold",
        borderRadius: "none",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        "&:hover, &:focus": {
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        },
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

export interface ButtonProps {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "lg" | "xlg";
  color?: "blue" | "gray" | "indigo";
  rounded?: "none" | "sm" | "lg" | "xs" | "full";
  shadow?: "sm" | "md" | "lg" | "xl";
  width?: "sm" | "md" | "lg" | "xlg" | "auto" | "full";
  children?: React.ReactNode;
  style?: any;
};

export function Button({
  variant,
  size,
  color,
  rounded,
  children,
}: ButtonProps) {
  return (
    <ButtonStyle variant={variant} size={size} color={color} rounded={rounded}>
      {children}
    </ButtonStyle>
  );
}

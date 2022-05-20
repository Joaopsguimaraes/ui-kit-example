import { styled } from "../styles/Theme";

export const Button = styled("button", {
  width: "$auto",
  cursor: "pointer",
  padding: "$2",
  fontSize: "$md",
  fontWeight: "$medium",
  fontFamily: "$roboto",
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
        padding: "$6",
        fontSize: "$lg",
      },
    },
    variant: {
      outline: {
        background: "none",
      },
      ghost: {
        background: "none",
        border: "none",
      },
    },
    color: {
      blue: {
        background: "$blue3",
        color: "$blue12",
        borderColor: "$blue6",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover": {
          background: "$blue5",
          color: "$blue12",
          borderColor: "$blue6",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
        "&:focus": {
          background: "$blue5",
          color: "$blue12",
          borderColor: "$blue7",
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
        color: "$indigo12",
        borderColor: "$indigo6",
        borderWidth: "$thick",
        borderStyle: "$solid",
        "&:hover": {
          background: "$indigo5",
          color: "$indigo12",
          borderColor: "$indigo6",
          borderWidth: "$thick",
          borderStyle: "$solid",
          transition: "$true",
        },
        "&:focus": {
          background: "$indigo5",
          color: "$indigo12",
          borderColor: "$indigo7",
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

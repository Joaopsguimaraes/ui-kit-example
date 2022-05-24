import { styled } from "../styles/Theme";

export const TextStyle = styled("p", {
  fontSize: "$md",
  fontFamily: "$roboto",
  fontWeight: "$regular",
  lineHeight: "$basic",
  color: "$gray12",
  textAlign: "justify",
  variants: {
    size: {
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
      xlg: {
        fontSize: "$2xl",
      },
      xxlg: {
        fontSize: "$4xl",
      },
      title: {
        fontSize: "$5xl",
      },
    },
    fontFamily: {
      roboto: {
        fontFamily: "$roboto",
      },
      poppins: {
        fontFamily: "$poppins",
      },
      inter: {
        fontFamily: "$inter",
      },
    },
    textAlign: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
      center: {
        textAlign: "center",
      },
      justify: {
        textAlign: "justify",
      },
    },
    bold: {
      true: {
        fontWeight: "$bold",
      },
    },
    color: {
      blue: {
        color: "$blue11",
      },
      darkBlue: {
        color: "$blue12",
      },
      gray: {
        color: "$gray12",
      },
      indigo: {
        color: "$indigo11",
      },
      darIndigo: {
        color: "$indigo12",
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

export interface TextProps {
  size?: "sm" | "md" | "lg" | "xlg" | "xxlg";
  textAlign?: "left" | "right" | "center" | "justify";
  fontFamily?: "robot" | "poppins" | "inter";
  bold?: "true";
  color?: "blue" | "darkBlue" | "gray" | "indigo" | "darkIndigo";
  children?: React.ReactNode;
}

export function Text({ size, textAlign, bold, children }: TextProps) {
  return (
    <TextStyle size={size} textAlign={textAlign} bold={bold}>
      {children}
    </TextStyle>
  );
}

import { styled } from "../styles/Theme";

export const HeadingStyle = styled("h1", {
  fontSize: "$3xl",
  fontFamily: "$poppins",
  fontWeight: "$regular",
  variants: {
    size: {
      sm: {
        fontSize: "$2xl",
      },
      md: {
        fontSize: "$3xl",
      },
      lg: {
        fontSize: "$5xl",
      },
      xlg: {
        fontSize: "$6xl",
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
      false: {
        fontWeight: "$regular",
      },
    },
    color: {
      blue: {
        color: "$blue11",
      },
      gray: {
        color: "$gray12",
      },
      indigo: {
        color: "$indigo11",
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

export interface HeadingProps {
  size?: "sm" | "lg" | "xlg";
  color?: "blue" | "gray" | "indigo";
  bold?: "true" | "false";
  textAlign?: "left" | "right" | "center" | "justify";
  marginTop?: 1 | 2 | 3;
  marginBottom?: 1 | 2 | 3;
  children?: React.ReactNode;
}

export function Heading({
  size,
  color,
  bold,
  textAlign,
  children,
  marginTop,
  marginBottom,
}: HeadingProps) {
  return (
    <HeadingStyle
      size={size}
      color={color}
      bold={bold}
      textAlign={textAlign}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </HeadingStyle>
  );
}

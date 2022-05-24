import { styled } from "../styles/Theme";

export const InputStyle = styled("input", {
  padding: "$2",
  fontSize: "$md",
  fontFamily: "$roboto",
  borderWidth: "$thick",
  background: "none",
  borderStyle: "$solid",
  variants: {
    color: {
      blue: {
        borderColor: "$blue8",
        color: "$blue12",
      },
      indigo: {
        borderColor: "$indigo8",
        color: "$indigo12",
      },
      gray: {
        borderColor: "$gray11",
        color: "$gray12",
      },
    },
    size: {
      sm: {
        padding: "$1",
        fontSize: "$sm",
      },
      lg: {
        padding: "$3",
        fontSize: "$md",
      },
      xlg: {
        padding: "$4",
        fontSize: "$lg",
      },
    },
    variant: {
      outline: {
        borderWidth: "$thick",
        background: "none",
        borderStyle: "$solid",
        borderRadius: "$sm",
      },
      filled: {
        border: "none",
        background: "$gray3",
      },
      flushed: {
        borderWidth: "$thick",
        borderStyle: "$solid",
        borderRadius: "none",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
      },
      unstyled: {},
    },
    borderRadius: {
      xs: {
        borderRadius: "$xs",
      },
      sm: {
        borderRadius: "$sm",
      },
      md: {
        borderRadius: "$md",
      },
      lg: {
        borderRadius: "$lg",
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

export interface InputProps {
  label: string | number;
  size: "sm" | "lg" | "xlg";
  color: "blue" | "indigo" | "gray";
  variant: "outline" | "filled" | "flushed" | "unstyled";
  borderRadius: "xs" | "sm" | "lg" | "full";
  width: "sm" | "lg" | "xlg" | "auto" | "full";
  placeholder: string;
}

export function Input({
  size,
  color,
  variant,
  width,
  label,
  placeholder,
}: InputProps) {
  return (
    <InputStyle
      size={size}
      variant={variant}
      width={width}
      value={label}
      color={color}
      placeholder={placeholder}
    />
  );
}

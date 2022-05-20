import { styled } from "../styles/Theme";

export const Flex = styled("div", {
  display: "flex",
  variants: {
    flexDirection: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    alignItems: {
      stretch: {
        alignItems: "stretch",
      },
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      baseline: {
        alignItems: "flex-baseline",
      },
    },
    alignContent: {
      stretch: {
        alignContent: "stretch",
      },
      start: {
        alignContent: "flex-start",
      },
      end: {
        alignContent: "flex-end",
      },
      center: {
        alignContent: "center",
      },
      spaceBetween: {
        alignContent: "space-between",
      },
      spaceAround: {
        alignContent: "space-around",
      },
    },
    justifyContent: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "flex-center",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
      spaceAround: {
        justifyContent: "space-around",
      },
    },
    flexWrap: {
      wrap: {
        flexWrap: "wrap",
      },
      nowrap: {
        flexWrap: "nowrap",
      },
    },
    gap: {
      sm: {
        gap: "$6",
      },
      md: {
        gap: "$8",
      },
      lg: {
        gap: "$12",
      },
      xlg: {
        gap: "$16",
      },
    },
    width: {
      1: {
        width: "25%",
      },
      2: {
        width: "50%",
      },
      3: {
        width: "75%",
      },
      full: {
        width: "100%",
      },
      auto: {
        width: "auto",
      },
    },
    height: {
      1: {
        height: "25%",
      },
      2: {
        height: "50%",
      },
      3: {
        height: "75%",
      },
      full: {
        height: "100%",
      },
      auto: {
        height: "auto",
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

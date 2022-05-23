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
      sm: {
        width: "25%",
      },
      md: {
        width: "50%",
      },
      lg: {
        width: "75%",
      },
      xlg: {
        width: "90%",
      },
      full: {
        width: "100%",
      },
      "100vw": {
        width: "100vw",
      },
    },
    height: {
      sm: {
        height: "25%",
      },
      md: {
        height: "50%",
      },
      lg: {
        height: "75%",
      },
      auto: {
        height: "auto",
      },
      full: {
        height: "full",
      },
      "100vh": {
        height: "100vh",
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

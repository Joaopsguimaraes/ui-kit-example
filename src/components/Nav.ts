import { styled } from "../styles/Theme";

export const Nav = styled("nav", {
  width: "100%",
  variants: {
    background: {
      blue: {
        background: "$blue3",
      },
      gray: {
        background: "$gray3",
      },
      indigo: {
        background: "$indigo3",
      },
    },
    width: {
      small: {
        width: "25%",
      },
      medium: {
        width: "50%",
      },
      large: {
        width: "75%",
      },
      full: {
        width: "100%",
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
    display: {
      flex: {
        display: "flex",
      },
      grid: {
        display: "grid",
      },
      block: {
        display: "block",
      },
      inline: {
        display: "inline",
      },
      "block-inline": {
        display: "inline-block",
      },
    },
    flexDirection: {
      flewRow: {
        flexDirection: "row",
      },
      flexColumn: {
        flexDirection: "column",
      },
    },
    justifyContent: {
      justifyBetween: {
        justifyContent: "space-between",
      },
      justifyAround: {
        justifyContent: "space-around",
      },
      justifyCenter: {
        justifyContent: "space-center",
      },
      justifyStart: {
        justifyContent: "space-start",
      },
      justifyEnd: {
        justifyContent: "space-end",
      },
    },
    AlignItems: {
      itemsCenter: {
        alignItems: "center",
      },
      itemsStart: {
        alignItems: "start",
      },
      itemsEnd: {
        alignItems: "end",
      },
    },
    wrap: {
      nowrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
    },
    gap: {
      small: {
        gap: "$6",
      },
      medium: {
        gap: "$12",
      },
      big: {
        gap: "$16",
      },
    },
  },
});

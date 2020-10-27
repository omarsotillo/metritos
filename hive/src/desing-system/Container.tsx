import { styled } from "../stitches.config";

export const Container = styled.div({
  variants: {
    flex: {
      true: {
        display: "flex",
        flexShrink: 0,
        flexGrow: 0,
      },
      false: {},
    },
    flexDirection: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    alignItems: {
      center: {
        alignItems: "center",
      },
    },
    justifyContent: {
      center: {
        justifyContent: "center",
      },
      spaceAround: {
        justifyContent: "space-around",
      },
    },
    size: {
      "1": {
        maxWidth: "430px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
  },
});

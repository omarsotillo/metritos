import { styled } from "../stitches.config";

export const Button = styled("button", {
  backgroundColor: "black",
  color: "white",
  fontSize: "15px",
  lineHeight: "1",
  fontWeight: 500,
  border: "0",
  padding: "20px",

  variants: {
    size: {
      small: {
        fontSize: "13px",
        height: "$5",
        paddingLeft: "10px",
        paddingRight: "10px",
      },
      large: {
        fontSize: "17px",
        height: "$7",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
    },
  },
});

import { styled } from "../stitches.config";

export const Text = styled.span({
  fontFamily: "Menlo",
});

export const Header1 = styled(Text, {
  fontWeight: 700,
  lineHeight: "60px",
  fontSize: "1.5em",
  marginBlockStart: "0.67em",
  marginBlockEnd: "0.67em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
});

export const Paragraph = styled(Text, {
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,

  variants: {
    size: {
      "1": {
        fontSize: "$4",
      },
      "2": {
        fontSize: "$6",
      },
      "3": {
        fontSize: "$8",
      },
      "4": {
        fontSize: "$10",
      },
      "5": {
        fontSize: "$12",
      },
      "6": {
        fontSize: "$24",
        letterSpacing: "-.016em",
      },
      "7": {
        fontSize: "$32",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      "8": {
        fontSize: "$48",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      "9": {
        fontSize: "$64",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
  },
});

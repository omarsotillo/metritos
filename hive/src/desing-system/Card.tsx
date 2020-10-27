import { styled } from "../stitches.config";

export const Card = styled.div({
  transform: "rotateX(51deg) rotateZ(43deg)",
  transformStyle: "preserve-3d",
  borderRadius: "32px",
  boxShadow:
    "1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01), 28px 28px 28px 0 rgba(34, 33, 81, 0.25)",
  transition: ".4s ease-in-out transform,  .4s ease-in-out box-shadow",
  textAlign: "center",
  height: "12rem",
  width: "12rem",
  ":hover": {
    transform: "translate3d(0px, -16px, 0px)  rotateX(51deg) rotateZ(43deg)",
    boxShadow:
      "1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01), 54px 54px 28px -10px rgba(34, 33, 81, 0.15)",
  },
});

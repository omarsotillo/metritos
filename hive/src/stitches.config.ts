import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
  tokens: {
    colors: {
      $gray100: "hsl(206,22%,99%)",
      $gray200: "hsl(206,12%,96%)",
      $gray300: "hsl(206,12%,95%)",
      $gray400: "hsl(206,12%,93%)",
      $gray500: "hsl(206,11%,92%)",
      $gray600: "hsl(206,10%,87%)",
      $gray700: "hsl(206,10%,80%)",
      $gray800: "hsl(206,10%,54%)",
      $gray900: "hsl(206,10%,44%)",
    },
    fontSizes: {
      $1: "0.25rem",
      $2: "0.5rem",
      $3: "0.75rem",
      $4: "1rem",
      $5: "1.25rem;",
      $6: "1.5rem",
      $8: "2rem",
      $10: "2.5rem",
      $12: "3rem",
      $16: "4rem",
      $20: "5rem",
      $24: "6rem",
      $32: "8rem",
      $40: "10rem",
      $48: "12rem",
      $56: "14rem",
      $64: "16rem",
    },
    space: {
      $1: "0.25rem",
      $2: "0.5rem",
      $3: "0.75rem",
      $4: "1rem",
      $5: "1.25rem;",
      $6: "1.5rem",
      $8: "2rem",
      $10: "2.5rem",
      $12: "3rem",
      $16: "4rem",
      $20: "5rem",
      $24: "6rem",
      $32: "8rem",
      $40: "10rem",
      $48: "12rem",
      $56: "14rem",
      $64: "16rem",
    },
  },
  breakpoints: {},
  utils: {
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    p: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    pt: (config) => (value) => ({
      marginTop: value,
    }),
    pr: (config) => (value) => ({
      marginRight: value,
    }),
    pb: (config) => (value) => ({
      marginBottom: value,
    }),
    pl: (config) => (value) => ({
      marginLeft: value,
    }),
    px: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    py: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

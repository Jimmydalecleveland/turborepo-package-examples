import { css } from "../stitches.config";

export const box = css({
  variants: {
    padding: {
      xxsmall: {
        padding: "$xxsmall",
      },
      medium: {
        padding: "$medium",
      },
      xxlarge: {
        padding: "$xxlarge",
      },
    },
    background: {
      none: {
        background: "none",
      },
      primary: {
        color: "$white",
        background: "$primary500",
      },
      secondary: {
        color: "$black",
        background: "$secondary500",
      },
      light: {
        color: "$black",
        background: "$gray050",
      },
      dark: {
        color: "$white",
        background: "$gray900",
      },
    },
    shadow: {
      none: {
        boxShadow: "none",
      },
      small: {
        boxShadow: "$small",
      },
      medium: {
        boxShadow: "$medium",
      },
      large: {
        boxShadow: "$large",
      },
    },
  },
});

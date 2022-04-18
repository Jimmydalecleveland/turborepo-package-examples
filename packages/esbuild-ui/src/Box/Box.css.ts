import { vars } from "../styles.css";
import { recipe } from "@vanilla-extract/recipes";

export const box = recipe({
  variants: {
    padding: {
      xxsmall: {
        padding: vars.spacing.xxsmall,
      },
      medium: {
        padding: vars.spacing.medium,
      },
      xxlarge: {
        padding: vars.spacing.xxlarge,
      },
    },
    background: {
      none: {
        background: "none",
      },
      primary: {
        color: vars.color.white,
        background: vars.color.primary["500"],
      },
      secondary: {
        color: vars.color.black,
        background: vars.color.secondary["500"],
      },
      light: {
        color: vars.color.black,
        background: vars.color.gray["050"],
      },
      dark: {
        color: vars.color.white,
        background: vars.color.gray["900"],
      },
    },
    shadow: {
      none: {
        boxShadow: "none",
      },
      small: {
        boxShadow: vars.shadows.small,
      },
      medium: {
        boxShadow: vars.shadows.medium,
      },
      large: {
        boxShadow: vars.shadows.large,
      },
    },
  },
});

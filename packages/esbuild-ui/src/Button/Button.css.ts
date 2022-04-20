import { vars } from "../styles.css";
import { recipe } from "@vanilla-extract/recipes";
import { style, styleVariants } from "@vanilla-extract/css";

export const button = recipe({
  base: {
    padding: `${vars.spacing.small} ${vars.spacing.medium}`,
    borderRadius: vars.radii.medium,
    fontSize: vars.fontSize.large,
    boxShadow: vars.shadows.medium,
  },

  variants: {
    background: {
      primary: {
        backgroundColor: vars.color.primary["500"],
        color: vars.color.primary["050"],
        "&:hover": {
          backgroundColor: vars.color.primary["400"],
        },
        "&:active": {
          backgroundColor: vars.color.primary["600"],
        },
      },
      secondary: {
        background: vars.color.secondary["300"],
        color: vars.color.black,
      },
    },
  },
});

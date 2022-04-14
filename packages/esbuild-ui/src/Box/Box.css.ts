import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../styles.css";

const baseBox = style({
  background: "purple",
});

export const padding = styleVariants({
  xxsmall: {
    padding: vars.spacing.xxsmall,
  },
  medium: {
    padding: vars.spacing.medium,
  },
  xxlarge: {
    padding: vars.spacing.xxlarge,
  },
});

// export const box = style([baseBox, padding]);

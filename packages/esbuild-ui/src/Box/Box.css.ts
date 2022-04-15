import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../styles.css";
import { recipe } from "@vanilla-extract/recipes";

export const box = recipe({
  base: {
    background: "peachpuff",
  },

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

// const base = style({
//   background: "peachpuff",
// });

// export const padding = styleVariants({
//   xxsmall: [
//     base,
//     {
//       padding: vars.spacing.xxsmall,
//     },
//   ],
//   medium: [
//     base,
//     {
//       padding: vars.spacing.medium,
//     },
//   ],
//   xxlarge: [
//     base,
//     {
//       padding: vars.spacing.xxlarge,
//     },
//   ],
// });

// export const shadow = styleVariants({
//   small: {
//     boxShadow: vars.shadows.small,
//   },
//   medium: {
//     boxShadow: vars.shadows.medium,
//   },
//   large: {
//     boxShadow: vars.shadows.large,
//   },
// });

// export const box = style([baseBox, padding]);

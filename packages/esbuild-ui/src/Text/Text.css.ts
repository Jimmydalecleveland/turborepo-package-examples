import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../styles.css";

export const text = recipe({
  base: {
    margin: 0,
    padding: 0,
  },

  variants: {
    size: {
      small: {
        fontSize: vars.fontSize.small,
      },
      medium: {
        fontSize: vars.fontSize.medium,
      },
      large: {
        fontSize: vars.fontSize.large,
      },
    },
    weight: {
      thin: {
        fontWeight: 300,
      },
      regular: {
        fontWeight: 400,
      },
      strong: {
        fontWeight: 600,
      },
    },
  },
});

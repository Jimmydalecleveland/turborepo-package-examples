import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../styles.css";

const widthVariants = Object.keys(vars.spacing).reduce<{ [key: string]: any }>(
  (acc, curr) => {
    const typedCurrKey = curr as keyof typeof vars.spacing;
    acc[curr] = {
      width: vars.spacing[typedCurrKey],
      minWidth: vars.spacing[typedCurrKey],
    };
    return acc;
  },
  {}
);

const heightVariants = Object.keys(vars.spacing).reduce<{ [key: string]: any }>(
  (acc, curr) => {
    const typedCurrKey = curr as keyof typeof vars.spacing;
    acc[curr] = {
      height: vars.spacing[typedCurrKey],
      minHeight: vars.spacing[typedCurrKey],
    };
    return acc;
  },
  {}
);

export const spacer = recipe({
  base: {
    display: "block",
  },

  variants: {
    width: widthVariants,
    height: heightVariants,
  },
});

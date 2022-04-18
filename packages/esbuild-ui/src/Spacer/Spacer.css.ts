import { recipe } from "@vanilla-extract/recipes";
import { getAllSpacingVarients } from "../style-utils";

const widthVariants = getAllSpacingVarients((val: string) => ({
  width: val,
  minWidth: val,
}));

const heightVariants = getAllSpacingVarients((val: string) => ({
  height: val,
  minHeight: val,
}));

export const spacer = recipe({
  base: {
    display: "block",
  },

  variants: {
    width: widthVariants,
    height: heightVariants,
  },
});

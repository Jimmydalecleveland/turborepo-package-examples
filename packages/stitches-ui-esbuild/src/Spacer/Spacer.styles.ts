import { css } from "../stitches.config";
import { getAllSpacingVarients } from "../style-utils";

const widthVariants = getAllSpacingVarients((val: string) => ({
  width: val,
  minWidth: val,
}));

const heightVariants = getAllSpacingVarients((val: string) => ({
  height: val,
  minHeight: val,
}));

export const spacer = css({
  display: "block",

  variants: {
    width: widthVariants,
    height: heightVariants,
  },
});

import { css } from "../stitches.config";

export const button = css({
  padding: "$small $medium",
  borderRadius: "$medium",
  fontSize: "$large",
  boxShadow: "$medium",

  variants: {
    background: {
      primary: {
        backgroundColor: "$primary500",
        color: "$primary050",
        "&:hover": {
          backgroundColor: "$primary400",
        },
        "&:active": {
          backgroundColor: "$primary600",
        },
      },
      secondary: {
        background: "$secondary300",
        color: "$black",
      },
    },
  },
});

import { css } from "../../stitches.config";

export const button = css({
  borderRadius: "8px",
  fontSize: "18px",
  padding: "10px 15px",

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
        background: "$primary300",
        color: "$black",
      },
    },
  },
});

import { css } from "../stitches.config";

export const text = css({
  margin: 0,
  padding: 0,

  variants: {
    size: {
      small: {
        fontSize: "$small",
      },
      medium: {
        fontSize: "$medium",
      },
      large: {
        fontSize: "$large",
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

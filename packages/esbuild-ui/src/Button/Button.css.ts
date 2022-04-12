import { vars } from "../styles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const Button = style({
  vars: {
    "--paragraph-dark-gray": vars.color.gray["900"],
  },
  display: "flex",
  fontSize: vars.fontSize.large,
  ":hover": {
    color: vars.color.white,
    backgroundColor: "var(--paragraph-dark-gray)",
  },
});

export const variant = styleVariants({
  primary: {
    background: vars.color.primary["500"],
    color: vars.color.primary["050"],
  },
  secondary: {
    background: vars.color.secondary["500"],
    color: vars.color.secondary["050"],
  },
});

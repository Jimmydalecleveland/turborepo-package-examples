import { vars } from "../styles.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const Button = style({
  vars: {
    "--paragraph-dark-gray": vars.color.gray["900"],
  },
  display: "flex",
  padding: `${vars.spacing.small} ${vars.spacing.medium}`,
  fontSize: vars.fontSize.large,
  fontWeight: 600,
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
    background: vars.color.secondary["300"],
    color: vars.color.black,
  },
});

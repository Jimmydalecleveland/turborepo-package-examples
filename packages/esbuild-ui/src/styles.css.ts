import {
  createTheme,
  style,
  styleVariants,
  globalStyle,
} from "@vanilla-extract/css";

export const [defaultTheme, vars] = createTheme({
  color: {
    primary: "coral",
    secondary: "cornflowerblue",
    background: "peachpuff",
  },
  fontSize: {
    small: "12px",
    large: "40px",
  },
});

globalStyle("html, body", {
  margin: 0,
  background: vars.color.background,
});

export const variant = styleVariants({
  primary: { background: vars.color.primary },
  secondary: { background: vars.color.secondary },
});

export const pWrapper = style({
  vars: {
    "--paragraph-green": "green",
  },
  display: "flex",
  fontSize: vars.fontSize.large,
  ":hover": {
    backgroundColor: "var(--paragraph-green)",
  },
});

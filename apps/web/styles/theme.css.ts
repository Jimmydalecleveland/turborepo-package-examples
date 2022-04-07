import { createTheme, style } from "@vanilla-extract/css";
import { vars } from "@jimmydc/esbuild-ui";

// export const [defaultTheme, vars] = createTheme({
//   color: {
//     primary: "coral",
//     secondary: "cornflowerblue",
//     background: "peachpuff",
//   },
//   fontSize: {
//     small: "12px",
//     large: "40px",
//   },
// });

export const exampleStyle = style({
  backgroundColor: vars.color.primary,
  fontFamily: vars.fontSize.large,
  color: "white",
  padding: 10,
});

export const darkTheme = createTheme(vars, {
  color: {
    primary: "peachpuff",
    secondary: "aliceblue",
    background: "indigo",
  },
  fontSize: {
    small: "10px",
    large: "90px",
  },
});

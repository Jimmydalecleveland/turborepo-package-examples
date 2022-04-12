import { createTheme, style } from "@vanilla-extract/css";
import { vars } from "@jimmydc/esbuild-ui";

export const brandTheme = createTheme(vars, {
  color: {
    primary: {
      "050": "#e2f4fc",
      "100": "#b7e4f7",
      "200": "#8bd2f1",
      "300": "#65c0ea",
      "400": "#50b2e6",
      "500": "#45a5e1",
      "600": "#4098d2",
      "700": "#3985bf",
      "800": "#3474aa",
      "900": "#2a5587",
    },
    secondary: {
      "050": "#fdfbe4",
      "100": "#fbf5be",
      "200": "#f8ee92",
      "300": "#f5e866",
      "400": "#f3e341",
      "500": "#f2df11",
      "600": "#f1cc08",
      "700": "#f0b400",
      "800": "#ef9c00",
      "900": "#ec7100",
    },
    gray: {
      "050": "#FAFAFA",
      "100": "#F5F5F5",
      "200": "#EEEEEE",
      "300": "#E0E0E0",
      "400": "#BDBDBD",
      "500": "#9E9E9E",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
    },
    white: "#ffffff",
    black: "#000000",
  },
  fontSize: {
    small: "12px",
    large: "40px",
  },
});

export const exampleStyle = style({
  backgroundColor: vars.color.gray["500"],
  fontFamily: vars.fontSize.large,
  color: "white",
  padding: 10,
});

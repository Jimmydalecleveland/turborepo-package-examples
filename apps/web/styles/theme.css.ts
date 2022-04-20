import { createTheme, style } from "@vanilla-extract/css";
import { vars } from "@jimmydc/esbuild-ui";

export const brandTheme = createTheme(vars, {
  color: {
    ...vars.color,
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
  },
  shadows: {
    small:
      "0 2px 4px 0px rgba(28,34,48,0.1),0 2px 2px -2px rgba(28,34,48,0.1),0 4px 4px -4px rgba(28,34,48,0.2)",
    medium:
      "0 2px 4px 0px rgba(28,34,48,0.1),0 8px 8px -4px rgba(28,34,48,0.1),0 12px 12px -8px rgba(28,34,48,0.2)",
    large:
      "0 2px 4px 0px rgba(28,34,48,0.1),0 12px 12px -4px rgba(28,34,48,0.1),0 20px 20px -12px rgba(28,34,48,0.2)",
  },
  spacing: {
    gutter: "24px",
    xxsmall: "4px",
    xsmall: "8px",
    small: "12px",
    medium: "20px",
    large: "32px",
    xlarge: "48px",
    xxlarge: "96px",
  },
  fontSize: {
    small: "14px",
    medium: "16px",
    large: "18px",
  },
  radii: {
    small: "4px",
    medium: "8px",
    large: "12px",
    round: "9999px",
  },
});

export const exampleStyle = style({
  backgroundColor: vars.color.gray["500"],
  fontFamily: vars.fontSize.large,
  color: "white",
  padding: 10,
});

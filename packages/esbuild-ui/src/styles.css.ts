import { createTheme, globalStyle } from "@vanilla-extract/css";

export const [defaultTheme, vars] = createTheme({
  color: {
    primary: {
      "050": "#efe5fd",
      "100": "#d4bff9",
      "200": "#b794f6",
      "300": "#9965f4",
      "400": "#7e3ff2",
      "500": "#6002ee",
      "600": "#5300e8",
      "700": "#3d00e0",
      "800": "#1c00db",
      "900": "#0000d6",
    },
    secondary: {
      "050": "#fdf2e0",
      "100": "#faddb1",
      "200": "#f7c87f",
      "300": "#f4b24c",
      "400": "#f2a127",
      "500": "#f09204",
      "600": "#ec8603",
      "700": "#e67701",
      "800": "#e06801",
      "900": "#d64e00",
    },
    gray: {
      "050": "#ECEFF1",
      "100": "#CFD8DC",
      "200": "#B0BEC5",
      "300": "#90A4AE",
      "400": "#78909C",
      "500": "#607D8B",
      "600": "#546E7A",
      "700": "#455A64",
      "800": "#37474F",
      "900": "#263238",
    },
    white: "#ffffff",
    black: "#000000",
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
});

globalStyle("html, body", {
  margin: 0,
  background: vars.color.gray["050"],
  fontFamily: "sans-serif",
});

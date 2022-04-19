import { createStitches } from "@stitches/core";

export const { css } = createStitches({
  theme: {
    colors: {
      primary050: "#efe5fd",
      primary100: "#d4bff9",
      primary200: "#b794f6",
      primary300: "#9965f4",
      primary400: "#7e3ff2",
      primary500: "#6002ee",
      primary600: "#5300e8",
      primary700: "#3d00e0",
      primary800: "#1c00db",
      primary900: "#0000d6",
      secondary050: "#fdf2e0",
      secondary100: "#faddb1",
      secondary200: "#f7c87f",
      secondary300: "#f4b24c",
      secondary400: "#f2a127",
      secondary500: "#f09204",
      secondary600: "#ec8603",
      secondary700: "#e67701",
      secondary800: "#e06801",
      secondary900: "#d64e00",
      gray050: "#ECEFF1",
      gray100: "#CFD8DC",
      gray200: "#B0BEC5",
      gray300: "#90A4AE",
      gray400: "#78909C",
      gray500: "#607D8B",
      gray600: "#546E7A",
      gray700: "#455A64",
      gray800: "#37474F",
      gray900: "#263238",
      white: "#fff",
      black: "#000",
    },
    space: {
      gutter: "24px",
      xxsmall: "4px",
      xsmall: "8px",
      small: "12px",
      medium: "20px",
      large: "32px",
      xlarge: "48px",
      xxlarge: "96px",
    },
    fontSizes: {
      small: "14px",
      medium: "16px",
      large: "18px",
    },
    shadows: {
      small:
        "0 2px 4px 0px rgba(28,34,48,0.1),0 2px 2px -2px rgba(28,34,48,0.1),0 4px 4px -4px rgba(28,34,48,0.2)",
      medium:
        "0 2px 4px 0px rgba(28,34,48,0.1),0 8px 8px -4px rgba(28,34,48,0.1),0 12px 12px -8px rgba(28,34,48,0.2)",
      large:
        "0 2px 4px 0px rgba(28,34,48,0.1),0 12px 12px -4px rgba(28,34,48,0.1),0 20px 20px -12px rgba(28,34,48,0.2)",
    },
    radii: {
      small: "4px",
      medium: "8px",
      large: "12px",
      round: "9999px",
    },
  },
});

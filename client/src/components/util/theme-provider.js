import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    grey_dark: "#272C31",
    grey_medium: "#5A6269",
    grey_light: "#5A6269",
    yellow_primary: "#FEB50D",
  },
};

export default function GlobalThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

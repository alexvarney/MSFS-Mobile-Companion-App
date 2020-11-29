import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    grey_dark: "#272C31",
    grey_medium: "#5A6269",
    grey_light: "#9aa4ad",
    yellow_primary: "#FEB50D",
    blue_primary: "#007bff",
    red_primary: "#dc3545",
    red_secondary: "#ac404a",
    orange_dark: "#7e2d16",
    orange_light: "#e0532b",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.grey_medium};
  }
`;

export default function GlobalThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

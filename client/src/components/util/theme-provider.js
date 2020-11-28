import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    grey_dark: "#272C31",
    grey_medium: "#5A6269",
    grey_light: "#5A6269",
    yellow_primary: "#FEB50D",
    blue_primary: "#007bff",
    red_primary: "#dc3545",
    red_secondary: "#ac404a",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.grey_light};
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

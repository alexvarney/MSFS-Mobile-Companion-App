import "../app.css";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import useDataPolling from "../hooks/useDataPolling";
import ThemeProvider from "./util/theme-provider";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./organisms/header";
import StateRouter from "./util/state-router";

import styled from "styled-components";

const MainContainer = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

const queryCache = new QueryCache();

function App() {
  useDataPolling();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider>
        <Router>
          <MainContainer>
            <Header />
            <StateRouter />
          </MainContainer>
        </Router>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
}

export default App;

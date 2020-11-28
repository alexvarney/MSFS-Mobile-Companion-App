import "../app.css";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import useDataPolling from "../hooks/useDataPolling";
import ThemeProvider from "./util/theme-provider";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./organisms/nav";
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
            <Nav />
            <StateRouter />
          </MainContainer>
        </Router>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
}

export default App;

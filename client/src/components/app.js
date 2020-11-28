import "../app.css";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import useDataPolling from "../hooks/useDataPolling";
import ThemeProvider from "./util/theme-provider";

import Nav from "./organisms/nav";
import Map from "./states/map";
import styled from "styled-components";

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const queryCache = new QueryCache();

function App() {
  useDataPolling();

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider>
        <MainContainer>
          <Nav />
          <Map />
        </MainContainer>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
}

export default App;

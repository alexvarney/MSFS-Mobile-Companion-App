import "../app.css";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import useDataPolling from "../hooks/useDataPolling";
import ThemeProvider from "./util/theme-provider";
import Pane from "./atoms/pane";

import Nav from "./organisms/nav";
import Map from "./states/map";
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
        <MainContainer>
          <Nav />
          <Pane>
            <Map />
          </Pane>
        </MainContainer>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
}

export default App;

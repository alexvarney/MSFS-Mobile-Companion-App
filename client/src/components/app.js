import React, { useEffect } from "react";
import "../app.css";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import useDataPolling from "../hooks/useDataPolling";
import ThemeProvider from "./util/theme-provider";
import Button from "../components/atoms/button";
import Nav from "./organisms/nav";

const queryCache = new QueryCache();

function App() {
  const { data, status } = useDataPolling();

  console.log(data);

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider>
        <Nav />
        <div>
          <h1>Hello World</h1>
          <Button>Test</Button>
        </div>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
}

export default App;

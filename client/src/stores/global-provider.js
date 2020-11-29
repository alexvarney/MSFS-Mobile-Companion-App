import React from "react";

import { DataStoreProvider } from "./data-store";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

export default function ({ children }) {
  return (
    <ReactQueryCacheProvider>
      <DataStoreProvider>{children}</DataStoreProvider>
    </ReactQueryCacheProvider>
  );
}

import React from "react";

import { DataStoreProvider } from "./data-store";

export default function ({ children }) {
  return (
    <>
      <DataStoreProvider>{children}</DataStoreProvider>
    </>
  );
}

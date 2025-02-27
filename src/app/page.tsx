"use client";
import GlobalContextProvider from "@/contexts/global";
import { FC } from "react";
import Root from "./root";

const App: FC = () => (
  <GlobalContextProvider>
    <Root />
  </GlobalContextProvider>
);

export default App;
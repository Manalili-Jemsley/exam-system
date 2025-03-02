import GlobalContextProvider from "@/contexts/global";
import { FC } from "react";
import Root from "./root";

const App: FC = () => {
  console.log("hi from server");

  return (
    <GlobalContextProvider>
      <Root />
    </GlobalContextProvider>
  );
};

export default App;
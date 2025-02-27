"use client";
import { createContext, useState, FC, ReactNode } from "react";
import { GlobalContextType, Themes } from "@/interfaces/contexts/global";

export const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

interface Props {
  children: ReactNode;
}

const GlobalContextProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT); // todo: get default value from localstorage

  return (
    <GlobalContext.Provider 
      value={{
        theme, setTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
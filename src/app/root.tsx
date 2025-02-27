"use client"; // todo: try to put theme in localstorage to remove usage of use client for entire page
import GlobalContextProvider, { GlobalContext } from "@/contexts/global";
import { Themes } from "@/interfaces/contexts/global";
import { FC, useContext } from "react";
import { twMerge } from "tailwind-merge";

const Root: FC = () => {
  const { theme, setTheme } = useContext(GlobalContext);
  const PAGE_CLASSNAME = "flex justify-center items-center h-screen";
  const COLOR = theme === Themes.DARK ? "bg-black text-white" : "bg-white text-black";
  
  return (
    <GlobalContextProvider>
      <div className={twMerge(PAGE_CLASSNAME, COLOR)}>
        Welcome to Exam System
        <button onClick={() => {
          if (theme === Themes.DARK) return setTheme(Themes.LIGHT);
          
          return setTheme(Themes.DARK);
        }}>Toggle Theme</button>
      </div>
    </GlobalContextProvider>
  );
};

export default Root;
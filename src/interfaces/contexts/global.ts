import { Dispatch, SetStateAction } from "react";

export enum Themes { // todo put in enums?
  LIGHT = "light",
  DARK = "dark",
}

export interface GlobalContextType {
  theme: Themes,
  setTheme: Dispatch<SetStateAction<Themes>>,
}
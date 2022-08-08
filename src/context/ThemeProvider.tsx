import React, { createContext, ReactElement, useState } from "react";
import { Theme } from "../interfaces/Theme.interface";

const getThemeSaved = window.localStorage.getItem("notes_app_theme");

const initTheme: Theme = {
  theme: getThemeSaved ? getThemeSaved : "light",
  setTheme: undefined,
};

export const ThemeContext = createContext<Theme>(initTheme);

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState(initTheme.theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

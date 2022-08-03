import React, { createContext, ReactElement, useState } from "react";
import { Theme } from "../interfaces/Theme.interface";

const initTheme: Theme = {
  theme: "dark",
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

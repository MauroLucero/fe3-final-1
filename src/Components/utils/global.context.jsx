import { createContext, useState } from "react";

export const ContextGlobal = createContext();

const themes = {
  dark: '.dark',
  light: '.light'
}
    
export const ContextProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
  setIsDark(!isDark)
  }


  return (
    <ContextGlobal.Provider value={[{theme, isDark}, toggleTheme()]}>
      {children}
    </ContextGlobal.Provider>
  );
};

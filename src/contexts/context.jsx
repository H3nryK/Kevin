import { createContext } from "react";

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {}
});

export default ThemeContext;
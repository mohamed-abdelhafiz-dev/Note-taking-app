import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

type ContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS_LIGHT, COLORS_DARK } from "../constants";
import { THEME_STORAGE_KEY } from "../constants/config";

type ThemeType = typeof COLORS_LIGHT | typeof COLORS_DARK;

export interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(COLORS_LIGHT);

  const loadTheme = async () => {
    try {
      const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (storedTheme) {
        setTheme(storedTheme === "dark" ? COLORS_DARK : COLORS_LIGHT);
      } else {
        AsyncStorage.setItem(THEME_STORAGE_KEY, "light");
        setTheme(COLORS_LIGHT);
      }
    } catch (error) {
      console.error("Failed to load theme from AsyncStorage", error);
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    try {
      const newTheme = theme === COLORS_LIGHT ? COLORS_DARK : COLORS_LIGHT;
      setTheme(newTheme);
      await AsyncStorage.setItem(
        THEME_STORAGE_KEY,
        newTheme === COLORS_LIGHT ? "light" : "dark"
      );
    } catch (error) {
      console.error("Failed to save theme to AsyncStorage", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

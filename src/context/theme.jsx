import { createContext, useContext, useEffect, useReducer } from "react";

const themeCtx = createContext({});

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const initialState = JSON.parse(localStorage.getItem("theme")) || LIGHT_THEME;

const darkModeReducer = (_, isDark) =>
  isDark === DARK_THEME ? DARK_THEME : LIGHT_THEME;

export const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useReducer(darkModeReducer, initialState);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("theme"))) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        // dark mode
        setTheme(DARK_THEME);
      } else {
        setTheme(LIGHT_THEME);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setTheme(e.matches ? DARK_THEME : LIGHT_THEME);
    });

  const value = {
    theme,
    setTheme: (res) => {
      setTheme(res);
    }
  };
  return <themeCtx.Provider {...{ value }}>{children}</themeCtx.Provider>;
};

export const useTheme = () => useContext(themeCtx);

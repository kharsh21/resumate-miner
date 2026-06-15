import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeMode = "dark" | "light";

interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

const STORAGE_KEY = "resumate-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored =
      (typeof window !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as ThemeMode | null)
        : null) || "dark";
    setTheme(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

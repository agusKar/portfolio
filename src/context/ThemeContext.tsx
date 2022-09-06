import { createContext, useEffect, useState } from "react";

type themeType = "light" | "dark" | string;

interface ThemeContextType {
  theme: themeType;
  changeTheme: (theme: themeType) => void;
  containerName: String;
  containerNameFN: (containerName: string) => void;
  lang: string;
  setLang: (lang: string) => void;
}

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider = ({ children }: props) => {
  const [themeMode, setThemeMode] = useState<themeType>(
    window.localStorage.getItem("theme")
      ? (window.localStorage.getItem("theme") as string)
      : "light"
  );

  const [lang, setLang] = useState<string>("");

  const [innerContainer, setInnerContainer] = useState<string>("about-me");

  useEffect(() => {
    const rootElement: HTMLElement = document.getElementById("root")!;
    switch (themeMode) {
      case "light":
        rootElement.classList.add("light");
        rootElement.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
        break;
      case "dark":
        rootElement.classList.add("dark");
        rootElement.classList.remove("light");
        window.localStorage.setItem("theme", "dark");
        break;
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeMode,
        changeTheme: setThemeMode,
        containerName: innerContainer,
        containerNameFN: setInnerContainer,
        lang,
        setLang,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

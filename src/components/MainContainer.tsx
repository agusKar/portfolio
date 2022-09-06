import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeContext";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Portfolio from "./Portfolio";

const MainContainer = () => {
  const [innerContainer, setInnerContainer] = useState<JSX.Element>();
  const { containerName, lang, setLang } = useContext(ThemeContext);

  const { i18n } = useTranslation("translation");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const changeInnerContainer = (containerName: String) => {
    switch (containerName) {
      case "about-me":
        return <AboutMe />;
      case "experience":
        return <Experience />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
    }
  };
  useEffect(() => {
    setInnerContainer(changeInnerContainer(containerName));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [containerName]);

  return (
    <div className="bg-glass">
      <div className="lang-container">
        <div className="switch-button">
          <input
            className="switch-button-checkbox"
            type="checkbox"
            onClick={() => changeLanguage(lang == "es" ? "en" : "es")}
          ></input>
          <label className="switch-button-label">
            <span className="switch-button-label-span">English</span>
          </label>
        </div>
      </div>
      <div className="container p-3 p-md-5">{innerContainer}</div>
      <div className="circle1"></div>
      <div className="circle3"></div>
    </div>
  );
};

export default MainContainer;

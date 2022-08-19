import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Portfolio from "./Portfolio";

const MainContainer = () => {
  const [innerContainer, setInnerContainer] = useState<JSX.Element>();
  const { containerName } = useContext(ThemeContext);

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
      <div className="container p-3 p-md-5">{innerContainer}</div>

      <div className="circle1"></div>
      <div className="circle3"></div>
    </div>
  );
};

export default MainContainer;

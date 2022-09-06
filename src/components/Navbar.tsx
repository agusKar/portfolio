import { useContext } from "react";
import experienceImg from "../assets/experience.webp";
import inboxImg from "../assets/inbox.webp";
import portfolioImg from "../assets/portfolio.webp";
import userImg from "../assets/user.webp";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // const { i18n } = useTranslation("translation");
  const { containerNameFN } = useContext(ThemeContext);
  const handleNavLink = (e: React.MouseEvent<HTMLElement>, section: string) => {
    const navLinks = document.querySelectorAll(".navLink");
    navLinks.forEach((link) => {
      link.classList.remove("active");

      e.currentTarget.classList.add("active");
    });
    containerNameFN(section);
  };
  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <nav>
      {/* <button onClick={() => changeLanguage("es")}>es</button>
      <button onClick={() => changeLanguage("en")}>en</button> */}
      <ul>
        <li
          className="navLink active"
          id="about-me"
          title="About me"
          onClick={(e) => handleNavLink(e, "about-me")}
        >
          <div>
            <img src={userImg} alt="About me Icon" />
          </div>
        </li>
        <li
          className="navLink"
          id="experience"
          title="Experience"
          onClick={(e) => handleNavLink(e, "experience")}
        >
          <div>
            <img src={experienceImg} alt="Experience Icon" />
          </div>
        </li>
        <li
          className="navLink"
          id="portfolio"
          title="Portfolio"
          onClick={(e) => handleNavLink(e, "portfolio")}
        >
          <div>
            <img src={portfolioImg} alt="Portfolio Icon" />
          </div>
        </li>
        <li
          className="navLink"
          id="contact"
          title="Contact"
          onClick={(e) => handleNavLink(e, "contact")}
        >
          <div>
            <img src={inboxImg} alt="Contact Icon" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

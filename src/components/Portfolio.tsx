import { t } from "i18next";
import { useState } from "react";
import Work from "./Work";
import { useTranslation } from "react-i18next";

interface work {
  id: number;
  name: string;
  descEs: string;
  descEn: string;
  tech: string;
  image: string;
  target: string;
}

const worksArray: work[] = [
  {
    id: 1,
    name: "Kar Books",
    descEs:
      "Este ecommerce se especializa en la venta de libros y fué realizado como ejercicio para la práctica profesional.",
    descEn:
      "This ecommerce specialized in books, was made as an exercise for professional practice.",
    tech: "React, Context, Bootstrap",
    image: "karbooks.png",
    target: "https://bookstore-89cc9.web.app/",
  },
  {
    id: 2,
    name: "Agencia Nomade",
    descEs:
      "Primera agencia donde trabajé, estuve a cargo de su propia página y más de 80 sitios.",
    descEn:
      "First agency where I worked, I made its own page and more than 80 sites.",
    tech: "Bootstrap, css, Javascript",
    image: "agencia_nomade.png",
    target: "https://agencianomade.com.ar/",
  },
  {
    id: 3,
    name: "Amek",
    descEs: "Sitio hecho a medida con bootstrap.",
    descEn: "Custom site with bootstrap.",
    tech: "Bootstrap, css, Javascript",
    image: "amek.png",
    target: "https://amekgroup.com/",
  },
  {
    id: 4,
    name: "Grupo E&D",
    descEs: "Sitio hecho a medida con bootstrap.",
    descEn: "Custom site with bootstrap.",
    tech: "Bootstrap, css, Javascript",
    image: "e&d.png",
    target: "http://www.grupoeyd.com.ar/",
  },
];
const Portfolio = () => {
  const [works, setWorks] = useState(worksArray);
  const { t } = useTranslation("translation");
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="row">
        {works.length > 0 &&
          works.map((singleWork) => (
            <Work key={singleWork.id} {...singleWork} />
          ))}
      </div>
      <div className="row">
        <div className="col-12">
          <p className="text-center">{t("portfolio.description")}</p>
          <p className="text-center">
            {t("portfolio.text_link") + " "}
            <a
              href="https://github.com/agusKar/"
              target="_blank"
              className="color-hover"
            >
              React & Vue
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

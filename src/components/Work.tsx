import i18next from "i18next";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface work {
  name: string;
  descEs: string;
  descEn: string;
  tech: string;
  image: string;
  target: string;
}

const Work = (work: work) => {
  const { lang } = useContext(ThemeContext);
  useEffect(() => {
    console.log(i18next.language);
  }, [lang]);

  return (
    <div className="col-12 col-md-6">
      <a href={work.target} target="_blank" className="box mb-4">
        <div
          className="box-img"
          style={{
            backgroundImage: `url(${
              new URL(`../assets/works/${work.image}`, import.meta.url).href
            })`,
          }}
        >
          <div className="card-img-overlay d-flex flex-column"></div>
        </div>
        <div className="box-body">
          <h5 className="box-title">{work.name}</h5>
          <p className="box-text mb-0">
            {lang == "es" ? work.descEs : work.descEn}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Work;

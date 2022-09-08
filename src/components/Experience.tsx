import simplistic_logo from "../assets/simplistic_logo.png";
import nomade_logo from "../assets/nomade_logo.png";
import codeImg from "../assets/code.webp";
import { useTranslation } from "react-i18next";
const Experience = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="row">
      <div className="col-12 text-center mb-4">
        <h1>{t("experience.title")}</h1>
        <p>{t("experience.description")}</p>
      </div>
      <div className="col-md-12">
        <div className="main-timeline">
          <div className="timeline">
            <div className="timeline-content">
              <div className="timeline-year text-center">2022 - 2021</div>
              <div className="timeline-icon">
                <img
                  src={simplistic_logo}
                  className="img-fluid p-3"
                  alt="Simplistic Logo"
                />
              </div>
              <h3 className="title">
                Front End - <b>Simplistic</b>
              </h3>
              <p className="description">{t("experience.job1_desc")}</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-content">
              <div className="timeline-year text-center">2021 - 2019</div>
              <div className="timeline-icon">
                <img
                  src={codeImg}
                  className="img-fluid p-3"
                  alt="Code logo animation"
                />
              </div>
              <h3 className="title">
                Full Stack - <b>Mardelnet</b>
              </h3>
              <p className="description">{t("experience.job2_desc")}</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-content">
              <div className="timeline-year text-center">2019 - 2017</div>
              <div className="timeline-icon">
                <img
                  src={nomade_logo}
                  className="img-fluid p-3"
                  alt="Agencia Nomade logo"
                />
              </div>
              <h3 className="title">
                Full Stack - <b>Agencia Nómade</b>
              </h3>
              <p className="description">{t("experience.job3_desc")}</p>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-content">
              <div className="timeline-year text-center">2022 - 2016</div>
              <div className="timeline-icon">
                <img
                  src={codeImg}
                  className="img-fluid p-3"
                  alt="Code logo animation"
                />
              </div>
              <h3 className="title">
                Full Stack - <b>Freelance</b>
              </h3>
              <p className="description">{t("experience.job4_desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

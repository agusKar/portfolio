import img_personal from "../assets/img_personal.jpg";
import js_logo from "../assets/techs/js_logo.png";
import mysql_logo from "../assets/techs/mysql_logo.png";
import next_logo from "../assets/techs/next_logo.png";
import nuxt_logo from "../assets/techs/nuxt_logo.png";
import php_logo from "../assets/techs/php_logo.png";
import react_logo from "../assets/techs/react_logo.png";
import git_logo from "../assets/techs/git_logo.png";
import bootstrap_logo from "../assets/techs/bootstrap_logo.png";
import tailwind_logo from "../assets/techs/tailwind_logo.png";
import sass_logo from "../assets/techs/sass_logo.png";
import shopify_logo from "../assets/techs/shopify_logo.png";
import ts_logo from "../assets/techs/ts_logo.png";
import vuex_logo from "../assets/techs/vuex_logo.png";
import vue_logo from "../assets/techs/vue_logo.png";
import wordpress_logo from "../assets/techs/wordpress_logo.png";
import { Trans, useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation("translation");
  return (
    <div id="AboutMe">
      <div className="row mb-2">
        <div className="col-12 text-center">
          <h1>{t("about-me.title")}</h1>
          <img
            src={img_personal}
            className="img_personal mb-4"
            alt="My photo - Agustin Karkocki"
          />
          <Trans components={{ p: <p />, b: <b /> }}>
            {t("about-me.description")}
          </Trans>
          <hr />
        </div>
      </div>
      <div className="row text-center technologies mt-3">
        <div className="col-12">
          <p className="mb-4">{t("about-me.title_techs")}</p>
        </div>
        <div
          className="col-4 col-md-3 mb-5 d-flex justify-content-center align-items-center"
          title="Javascript"
        >
          <img src={js_logo} alt="Logo Javascript" />
        </div>
        <div
          className="col-4 col-md-3 mb-5 d-flex justify-content-center align-items-center"
          title="React"
        >
          <img src={react_logo} alt="Logo React" />
        </div>
        <div
          className="col-4 col-md-3 mb-5 d-flex justify-content-center align-items-center"
          title="Sass"
        >
          <img src={sass_logo} alt="Logo Sass" />
        </div>
        <div
          className="col-4 col-md-3 mb-5 d-flex justify-content-center align-items-center"
          title="Typescript"
        >
          <img src={ts_logo} alt="Logo Typescript" />
        </div>
        <div
          className="col-4 col-md-3 mb-5 d-flex justify-content-center align-items-center"
          title="Next Js"
        >
          <img src={next_logo} alt="Logo Next Js" />
        </div>
        <div
          className="col-4 col-md-3 mb-5 d-flex justify-content-center align-items-center"
          title="Git"
        >
          <img src={git_logo} className="mb-2" alt="Logo Git" />
        </div>
        <div
          className="col-4 col-md-3 mb-5 d-flex justify-content-center align-items-center"
          title="Bootstrap"
        >
          <img src={bootstrap_logo} className="mb-2" alt="Logo Bootstrap" />
        </div>
        <div
          className="col-4 col-md-3 mb-5 d-flex justify-content-center align-items-center"
          title="Tailwind"
        >
          <img src={tailwind_logo} className="mb-2" alt="Logo Tailwind" />
        </div>
      </div>
      <div className="row text-center technologies mt-2">
        <div className="col-12">
          <p className="mb-4">{t("about-me.title_techs2")}</p>
        </div>
        <div
          className="col-3 col-md-2 mb-5 d-flex justify-content-center align-items-center"
          title="PHP"
        >
          <img src={php_logo} alt="Logo PHP" />
        </div>
        <div
          className="col-3 col-md-2 mb-5 d-flex justify-content-center align-items-center"
          title="MYsql"
        >
          <img src={mysql_logo} alt="Logo MYsql" />
        </div>
        <div
          className="col-3 col-md-2 mb-5 d-flex justify-content-center align-items-center"
          title="Wordpress"
        >
          <img src={wordpress_logo} alt="Logo Wordpress" />
        </div>
        <div
          className="col-3 col-md-2 mb-5 d-flex justify-content-center align-items-center"
          title="Vue"
        >
          <img src={vue_logo} alt="Logo Vue" />
        </div>
        <div
          className="col-3 col-md-2 mb-5 d-flex justify-content-center align-items-center"
          title="Vuex"
        >
          <img src={vuex_logo} alt="Logo Vuex" />
        </div>
        <div
          className="col-3 col-md-2 mb-5 d-flex justify-content-center align-items-center"
          title="Nuxt"
        >
          <img src={nuxt_logo} alt="Logo Nuxt" />
        </div>
        <div
          className="col-3 col-md-2 mb-5 d-flex justify-content-center align-items-center"
          title="Shopify"
        >
          <img src={shopify_logo} alt="Logo Shopify" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

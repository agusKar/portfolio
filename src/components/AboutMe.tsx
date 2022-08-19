import img_personal from "../assets/img_personal.jpg";
import js_logo from "../assets/js_logo.png";
import mysql_logo from "../assets/mysql_logo.png";
import next_logo from "../assets/next_logo.png";
import nuxt_logo from "../assets/nuxt_logo.png";
import php_logo from "../assets/php_logo.png";
import react_logo from "../assets/react_logo.png";
import git_logo from "../assets/git_logo.png";
import bootstrap_logo from "../assets/bootstrap_logo.png";
import tailwind_logo from "../assets/tailwind_logo.png";
import sass_logo from "../assets/sass_logo.png";
import shopify_logo from "../assets/shopify_logo.png";
import ts_logo from "../assets/ts_logo.png";
import vuex_logo from "../assets/vuex_logo.png";
import vue_logo from "../assets/vue_logo.png";
import wordpress_logo from "../assets/wordpress_logo.png";

const AboutMe = () => {
  return (
    <div id="AboutMe">
      <div className="row mb-2">
        <div className="col-12 text-center">
          <h1>Sobre mí</h1>
          <img
            src={img_personal}
            className="img_personal mb-4"
            alt="My photo - Agustin Karkocki"
          />
          <p>
            Me llamo Agustín Karkocki y soy programador Front End. Estudié en la
            UTN (Universidad Tecnólogica Nacional) en Argentina y me recibí en
            2017. Desde 2016 trabajo como programador freelance y también en
            empresas argentinas e internacionales. Me gusta mucho el diseño y
            siempre trato de mejorar en ese aspecto aprendiendo herramientas
            como Photoshop, Figma, etc. y viendo nuevos trends por ejemplo.
          </p>
          <p>
            Por muchos años programé con lenguajes Back End como PHP y MYsql,
            desarrollando CMS propios para la carga de novedades, productos,
            personal, etc. en base de datos.
          </p>
          <p>
            También trabajé con Wordpress creando mis propios plugins y temas de
            0. Usé Shopify complementandolo junto a <b>Vue</b> por casi 1 año en
            una empresa estadounidense donde mejore mucho mi conocimiento sobre
            Javascript, Pixel Perfect en el diseño y muchos métodos para mejorar
            la accesibilidad y análisis de un sitio web.
          </p>
          <p>
            Actualmente estoy totalmente enfocado al desarrollo Front End
            utilizando <b>React</b> principalmente. Mi próximo objetivo es{" "}
            <b>Redux</b>.
          </p>
          <hr />
        </div>
      </div>
      <div className="row text-center technologies mt-3">
        <div className="col-12">
          <p className="mb-4">
            Estas son algunas de las tecnologías que uso en mi día a día:
          </p>
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
          <p className="mb-4">Y estas son otras tecnologías que usé:</p>
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

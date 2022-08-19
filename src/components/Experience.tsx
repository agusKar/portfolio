import simplistic_logo from "../assets/simplistic_logo.png";
import nomade_logo from "../assets/nomade_logo.png";
import codeImg from "../assets/code.webp";
const Experience = () => {
  return (
    <div className="row">
      <div className="col-12 text-center mb-4">
        <h1>Experience</h1>
        <p>
          Trabajé en más de 150 sitios en mi carrera con diversas tecnologías,
          aquí dejo un resumen de mis años como programador:
        </p>
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
              <p className="description">
                Web developer con Shopify usando HTML, CSS, JS & Vue
              </p>
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
              <p className="description">
                Diseño y maquetación web. Desarrollo de Backends utilizando
                WordPress. Plugins y themes a medida. Optimización. Tecnologías
                utilizadas: html5 - CSS - JavaScript - Wordpress - PHP & MySql -
                API - AMP
              </p>
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
                Full Stack - <b>Agencia Nomade</b>
              </h3>
              <p className="description">
                Me dedique a toda la parte de: Diseño web y Programación
                (Frontend y Backend). Actualizado de sitios. Desarrollo de un
                panel administrativo para la auto-gestión del sitio.
                Optimización y mejoras de SEO Tecnologías usadas: HTML, CSS, JS,
                JQUERY, AJAX, PHP, SQL.
              </p>
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
              <p className="description">
                Sitios web auto-gestionables, por ejemplo Wordpress o un panel
                administrativo con su respectiva base de datos hecho totalmente
                a medida, posicionamiento web y optimizacion de sitios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

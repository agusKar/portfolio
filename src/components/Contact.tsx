import emailjs from "@emailjs/browser";
import { FormikErrors, useFormik } from "formik";
import { useRef, useState } from "react";

interface valuesForm {
  user_email: string;
  user_name: string;
  user_message: string;
}

const validate = (values: valuesForm) => {
  let errors: FormikErrors<valuesForm> = {};
  if (!values.user_name && values.user_name == "") {
    errors.user_name = "Requerido.";
  }

  if (!values.user_email && values.user_email == "") {
    errors.user_email = "Requerido.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)
  ) {
    errors.user_email = "Email inválido.";
  }

  if (!values.user_message && values.user_message == "") {
    errors.user_message = "Requerido.";
  } else if (values.user_message.length < 20) {
    errors.user_message = "Mínimo 20 carácteres.";
  }

  return errors;
};

const Contact = () => {
  const [emailConfirm, setEmailConfirm] = useState<boolean>(false);
  const [formSending, setFormSending] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_message: "",
    },
    validate,
    onSubmit: (values) => {
      setFormSending(true);
      emailjs
        .sendForm(
          "service_isc4lw7",
          "template_enymegw",
          form.current as HTMLFormElement,
          "I9XHg_GAg0ChGzMzJ"
        )
        .then(
          (result) => {
            setEmailConfirm(true);
            values.user_name = "";
            values.user_email = "";
            values.user_message = "";
            setFormSending(false);
          },
          (error) => {
            setEmailConfirm(false);
            setFormSending(false);
            console.log(error.text);
          }
        );
    },
  });
  return (
    <div className="row">
      <div className="col-12 text-center">
        <h1>Contactate conmigo</h1>
      </div>
      <div className="col-12 col-md-10 mx-auto">
        <form id="contactMe" ref={form} onSubmit={formik.handleSubmit}>
          <div>
            <div className="form-floating mb-4">
              <input
                type="text"
                name="user_name"
                id="user_name"
                onChange={formik.handleChange}
                value={formik.values.user_name}
                placeholder="Nombre"
                required
                className={`form-control ${
                  formik.errors.user_name && "is-invalid"
                }`}
              />
              <label htmlFor="user_name">Nombre</label>

              {formik.errors.user_name ? (
                <div className="py-2 px-1 text-danger">
                  {formik.errors.user_name}
                </div>
              ) : null}
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                name="user_email"
                id="user_email"
                onChange={formik.handleChange}
                value={formik.values.user_email}
                placeholder="Email"
                required
                className={`form-control ${
                  formik.errors.user_email && "is-invalid"
                }`}
              />
              <label htmlFor="user_email">Email</label>
              {formik.errors.user_email ? (
                <div className="py-2 px-1 text-danger">
                  {formik.errors.user_email}
                </div>
              ) : null}
            </div>
            <div className="form-floating mb-4">
              <textarea
                name="user_message"
                id="user_message"
                onChange={formik.handleChange}
                value={formik.values.user_message}
                required
                className={`form-control ${
                  formik.errors.user_message && "is-invalid"
                }`}
                rows={19}
                placeholder="Mensaje"
              />
              <label htmlFor="user_message">Mensaje</label>

              {formik.errors.user_message ? (
                <div className="py-2 px-1 text-danger">
                  {formik.errors.user_message}
                </div>
              ) : null}
            </div>
            <button
              className="btn fw-bold text-uppercase py-2 py-md-3 w-100"
              type="submit"
              disabled={formSending}
            >
              {formSending ? (
                <>
                  Enviando
                  <span
                    className="spinner-border spinner-border-sm ms-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Loading...</span>
                </>
              ) : (
                "Enviar"
              )}
            </button>
            {emailConfirm && (
              <div className="alert alert-success-glass mt-4">
                Envio satisfactorio
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

import "./contact.styles.scss";

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contacteză-ne</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        {/* -- * * * * * * * * * * * * * * *--
        -- * * SB Forms Contact Form * *--
        -- * * * * * * * * * * * * * * *--
        -- This form is pre-integrated with SB Forms.--
        -- To make this form functional, sign up at--
        -- https://startbootstrap.com/solution/contact-forms--
        -- to get an API token!-- */}
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Numele tău *"
                  data-sb-validations="required"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  Numele este obligatoriu.
                </div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Email-ul tău *"
                  data-sb-validations="required,email"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  Email-ul este obligatoriu.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email-ul nu este valid.
                </div>
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Numărul tău de telefon *"
                  data-sb-validations="required"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="phone:required"
                >
                  Numărul de telefon este obligatoriu.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Mesajul tău *"
                  data-sb-validations="required"
                ></textarea>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  Mesajul este obligatoriu.
                </div>
              </div>
            </div>
          </div>
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center text-white mb-3">
              <div className="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms">
                https://startbootstrap.com/solution/contact-forms
              </a>
            </div>
          </div>
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Eroare la trimiterea mesajului!
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary btn-xl text-uppercase disabled"
              id="submitButton"
              type="submit"
            >
              Trimite mesajul
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

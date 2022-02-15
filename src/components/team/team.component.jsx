import React from "react";

import "./team.styles.scss";

const Team = () => {
  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Persoană de contact
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/1.jpg"
                alt="..."
              />
              <h4>Filip Ilie</h4>
              <p className="text-muted">Instalator principal</p>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

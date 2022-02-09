import React from "react";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">
          Bine ați venit pe pagina noastră!
        </div>
        <div className="masthead-heading text-uppercase">Filip Install</div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#services">
          Află mai multe
        </a>
      </div>
    </header>
  );
};

export default Header;

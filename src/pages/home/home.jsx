import React from "react";

import Navbar from "../../components/navbar/navbar.component";
import Header from "../../components/header/header.component";
import Services from "../../components/services/services.component";
import Portofolio from "../../components/portofolio/portofolio.component";
import About from "../../components/about/about.component";
import Team from "../../components/team/team.component";
import Contact from "../../components/contact/contact.component";
import Footer from "../../components/footer/footer.component";

import "./home.scss";

const HomePage = () => {
  return (
    <div id="page-top">
      <Navbar />
      <Header />
      <Services />
      <Portofolio />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

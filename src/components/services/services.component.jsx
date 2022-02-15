import React from "react";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Servicii oferite</h2>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <h4 className="my-3">Instalații sanitare</h4>
            <p className="text-muted">
              <b>Montaj</b>
              <ul>
                <li>obiecte sanitare</li>
                <li>pompe sumersibile</li>
                <li>kit filtre de apă potabilă</li>
                <li>boilere</li>
                <li>panouri solare</li>
              </ul>
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="my-3">Instalații termice</h4>
            <p className="text-muted">
              <b>Montaj</b>
              <ul>
                <li>centrale pe lemne</li>
                <li>centrale pe peleți</li>
                <li>centrale pe gaz</li>
                <li>puffer cu serpentină</li>
                <li>panouri solare</li>
                <li>pompe de căldură aer-apă</li>
                <li>aer condiționat</li>
                <li>calorifere</li>
                <li>încălzire în pardoseală (+industrială)</li>
                <li>ventilații cu recuperator de căldură</li>
              </ul>
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="my-3">Instalații electrice</h4>
            <p className="text-muted">
              <b>Montaj</b>
              <ul>
                <li>prize</li>
                <li>întrerupătoare clasice</li>
                <li>întrerupătoare cap-scară</li>
                <li>întrerupătoare cap-cruce</li>
                <li>pulsanți</li>
                <li>relee</li>
                <li>automatizări case (smart-home) prin KNX</li>
                <li>controlul iluminatului</li>
                <li>dimming</li>
                <li>controlul jaluzelelor</li>
                <li>controlul temperaturii pe zone</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

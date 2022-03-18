import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { selectPortofolio } from "../../redux/portofolio/portofolio.selectors";
import PortofolioItem from "../portofolioItem/portofolioItem.component";

import "./portofolio.styles.scss";

const Portofolio = ({ products }) => {
  if (products)
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portofoliu</h2>
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {products?.map(({ id, ...otherProps }) => (
                <PortofolioItem key={id} {...otherProps} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    );
  else return <div>Portofolio page</div>;
};

const mapStateToProps = createStructuredSelector({
  products: selectPortofolio,
});

export default connect(mapStateToProps)(Portofolio);

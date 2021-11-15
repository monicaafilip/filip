import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectPortofolio } from "../../redux/portofolio/portofolio.selectors";
import PortofolioItem from "../portofolioItem/portofolioItem.component";

const Portofolio = ({ products }) => {
    if (products)
    return (
        <div className='portofolio'>
            {
                products.map(({id, ...otherProps}) => (
                    <PortofolioItem key={id}{...otherProps}/>
                ))
            }
        </div>
    )
    else
        return (
            <div>
                Portofolio page
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    products: selectPortofolio
});

export default connect(mapStateToProps)(Portofolio);
import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import PORTOFOLIO_DATA from "../../redux/portofolio/portofolio.data";

import { selectPortofolio } from "../../redux/portofolio/portofolio.selectors";
import PortofolioItem from "../portofolioItem/portofolioItem.component";

import './portofolio.styles.scss';

class Portofolio extends React.Component {
    constructor() 
    {
        super();
        this.state = {
            products: PORTOFOLIO_DATA
        }
    }
    render() 
    {
        //console.log(this.state.products);
        return (
            <div className='portofolio'>
            {
               this.state.products.map(({id, ...otherProps}) => (
                   <PortofolioItem key={id}{...otherProps}/>
               ))
           }
           </div>
        )
    }
}

export default Portofolio;

// const Portofolio = ({ products }) => {
//     if (products)
//     return (
//         <div className='portofolio'>
//             {
//                 products.map(({id, ...otherProps}) => (
//                     <PortofolioItem key={id}{...otherProps}/>
//                 ))
//             }
//         </div>
//     )
//     else
//         return (
//             <div>
//                 Portofolio page
//             </div>
//         )
// }

// const mapStateToProps = createStructuredSelector({
//     products: selectPortofolio
// });

// export default connect(mapStateToProps)(Portofolio);
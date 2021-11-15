import React from "react";

import './portofolioItem.styles.scss';

const PortofolioItem = ({ imageUrl }) => {
    return (
        <div className='portofolio-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
        </div>
    )
}

export default PortofolioItem;
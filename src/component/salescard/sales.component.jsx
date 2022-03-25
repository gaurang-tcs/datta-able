import React from "react";

import './sales.styles.scss';

const SalesCard = ({ sale }) => {
    const { title, price, percentage } = sale;
    return (
        <div className="salescard">

            <div className="title">{title}</div>

            <div className="p-p">
                <span className="price">{price}</span>
                <span className="percentage">{percentage}</span>
            </div>
            
        </div>
    )

};

export default SalesCard;
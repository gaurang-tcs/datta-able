import React from "react";
import ProgressBar from '../progressbar/progressbar.component';
import './sales.styles.scss';

import { FaLongArrowAltUp } from 'react-icons/fa';

const SalesCard = ({ sale }) => {
    const { title, price, percentage } = sale;
    return (
        <div className="salescard">
        
            <div>
                <div className="title">{title}</div>

                <div className="p-p">
                <div>
                    <FaLongArrowAltUp className="arrow" />
                    <span className="price">{price}</span>
                </div>
                    <span className="percentage">{percentage}</span>
                </div>

                <ProgressBar background='linear-gradient(to right, #7fd0eb 0%, #16d09e 100%)' completed={30} margin={3} />

            </div>
        </div>

    )

};

export default SalesCard;
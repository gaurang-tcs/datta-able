import React, { useState } from "react";
import SALES_DATA from "../../data/sales.data.js";

import SalesCard from "../salescard/sales.component.jsx";

import './salescardlist.styles.scss';


const SalesCardList = () => {
    const [sales] = useState(SALES_DATA);
    return (
        <div className="salescardlist">
           { 
            sales.map((sale) => (<SalesCard key={sale.id} sale={sale} />))    
           }
        </div>
    )
};

export default SalesCardList;
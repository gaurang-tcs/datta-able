import React from "react";
import { FaStar } from 'react-icons/fa';
import './rating.styles.scss';
import ProgressBar from "../progressbar/progressbar.component";

const Rating = () => {
    return (

        <div className="rating">
            <div className="main-rating">
                <span className="r-title">Rating</span>

                <div className="r-header">

                    <div className="t-star">
                        <span className="totalrating">4.7</span>
                        <FaStar className="star" />
                    </div>

                    <div className="increase">
                        <span className="count">0.4</span>
                        <img src="https://i.postimg.cc/mrJ57fRh/arrow-up.jpg" alt="arrow" />
                    </div>

                </div>

                <div className="r-row">

                    <div className="star-num">
                        <FaStar className="star" />
                        <span className="num">5</span>

                    </div>

                    <span className="totalnumber">384</span>

                </div>

                <ProgressBar background='linear-gradient(to right, #7fd0eb 0%, #16d09e 100%)' completed={70} />


                <div className="r-row">

                    <div className="star-num">
                        <FaStar className="star" />
                        <span className="num">4</span>
                    </div>

                    <span className="totalnumber">145</span>
                </div>
                <ProgressBar background='linear-gradient(to right, #7fd0eb 0%, #16d09e 100%)' completed={60} />

                <div className="r-row">

                    <div className="star-num">
                        <FaStar className="star" />
                        <span className="num">3</span>
                    </div>

                    <span className="totalnumber">24</span>
                </div>
                <ProgressBar background='linear-gradient(to right, #7fd0eb 0%, #16d09e 100%)' completed={40} />

                <div className="r-row">

                    <div className="star-num">
                        <FaStar className="star" />
                        <span className="num">2</span>
                    </div>

                    <span className="totalnumber">1</span>
                </div>

                <ProgressBar background='linear-gradient(to right, #7fd0eb 0%, #16d09e 100%)' completed={30} />

                <div className="r-row">

                    <div className="star-num">
                        <FaStar className="star" />
                        <span className="num">1</span>
                    </div>

                    <span className="totalnumber">0</span>
                </div>
                <ProgressBar background='linear-gradient(to right, #7fd0eb 0%, #16d09e 100%)' completed={20} />
            </div>
        </div>
    )
};

export default Rating;
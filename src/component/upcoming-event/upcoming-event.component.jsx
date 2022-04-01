import React from "react";
import './upcoming-event.styles.scss';
import { GiElectric } from 'react-icons/gi';
import { ImLocation2 } from "react-icons/im";

const UpcomingEvent = () => {
    return (
        <div className="upcoming-event">

            <div className="head">
                <span className="lheading">
                    Upcoming Event
                </span>
                <label className="label">34%</label>
            </div>

            <div className="competitors">
                <div className="count">45</div>
                <span className="competitor"> competitors</span>
            </div>

            <div className="participate">
                <h2 className="p-title">You can participate in event</h2>
                <img src="data:image/png;base64,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" alt="hand" />

            </div>

            <div className="total-ideas">
                <div>
                    <GiElectric className="logo" />
                </div>

                <div className="idea">
                    <span className="count">235</span>
                    <span className="desc">TOTAL IDEAS</span>
                </div>
            </div>

            <div className="total-ideas">
            <div>
                <ImLocation2 className="logo" />
            </div>

            <div className="idea">
                <span className="count">26</span>
                <span className="desc">TOTAL LOCATIONS</span>
            </div>
        </div>
        </div>
    )
};

export default UpcomingEvent;
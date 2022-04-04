import React from "react";

import './today-user.styles.scss';

const TodayUser = ({user}) => {
    const {profile, name, activity, time, status} = user;
    return (
        <div className="today-user">
        <img src={`${profile}`} alt="profile" />
          <span className="details">{name}</span>
          <span className="details">{activity}</span>
          <span className="details">{time}</span>
          <span className="details">{status}</span>
        </div>
    )
};

export default TodayUser;
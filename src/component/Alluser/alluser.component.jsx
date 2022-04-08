import React from "react";

import './alluser.styles.scss';

import {BsDot} from 'react-icons/bs';

const AllUser = ({user}) => {
    const {profile, name, activity, time, status} = user;
    return (
        <div className="all-user">
        <img src={`${profile}`} alt="profile" />
          <span className="details">{name}</span>
          <span className="details">{activity}</span>
          <span className="details">{time}</span>
          <span className="details">{status}</span>
          <BsDot className="dot"/>
        </div>
    )
};

export default AllUser;
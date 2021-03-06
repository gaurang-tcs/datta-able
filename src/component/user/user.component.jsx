import React from "react";
import { BsDot } from "react-icons/bs";

import './user.styles.scss';

const User = ({ user }) => {
    const { profile, name, description, time } = user;
    return (

        <div className="user">

            <img src={`${profile}`} alt="profile" />

            <div className="userdetails">
                <span className="username">{name} </span>
                <p className="description">{description}</p>
            </div>

            <div className="dot-time">
                <BsDot className="dot"/>
                <span className="time">{time}</span>
            </div>

            <div className="custom-button">
                <button className="button">Reject</button>
                <button className="approve">approve</button>
            </div>

        </div>

    )
};

export default User;
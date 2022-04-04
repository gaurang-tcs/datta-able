import React, {useState} from "react";
import './thisweek-userlist.styles.scss';

import ThisWeekUser from "../Thisweek-user/thisweek-user.component";

import THISWEEK_USER_DATA from "../../data/thisweek-user.data";

const ThisWeekUserList = () => {
    const [thisweekusers] = useState(THISWEEK_USER_DATA);
    return (
        <div className="thisweek-users-list">
            <div className="user-header">

                <div className='header-block'>
                    <span>User</span>
                </div>
                <div className='header-block'>
                    <span>Activity</span>
                </div>
                <div className='header-block'>
                    <span>Time</span>
                </div>
                <div className='header-block'>
                    <span>Status</span>
                </div>

            </div>

            <div className="today-users">
                {
                    thisweekusers.map((user) => (<ThisWeekUser key={user.id} user={user} />))
                }
            </div>
        </div>
    )
};

export default ThisWeekUserList;
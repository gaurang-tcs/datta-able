import React, {useState} from "react";

import TodayUser from "../Today-user/today-user.component";

import './today-user-list.styles.scss';
import TODAY_USER_DATA from "../../data/today-user.data";

const UserList = () => {
    const [todayusers] = useState(TODAY_USER_DATA);
    return (
        <div className="users-list">
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
                    todayusers.map((user) => (<TodayUser key={user.id} user={user} />))
                }
            </div>
        </div>
    )
};

export default UserList;
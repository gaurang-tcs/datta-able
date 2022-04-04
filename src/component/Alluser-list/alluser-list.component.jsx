import React, {useState} from "react";

import AllUser from "../Alluser/alluser.component";

import './alluser-list.styles.scss';
import ALL_USER_DATA from "../../data/alluser.data";

const AllUserList = () => {
    const [allusers] = useState(ALL_USER_DATA);
    return (
        <div className="all-users-list">
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

            <div className="all-users">
                {
                    allusers.map((user) => (<AllUser key={user.id} user={user} />))
                }
            </div>
        </div>
    )
};

export default AllUserList;
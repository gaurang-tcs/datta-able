import React, { useState } from "react";
import User from "../user/user.component";

import USER_DATA from "../../data/users.data";
import './userlist.styles.scss';

const UserList = () => {
    const [users] = useState(USER_DATA);
    return (
        <div className="users">
            <span className="heading">
                Recent Users
            </span>
            <div className="userlist">
                {
                    users.map((user) => (<User key={user.id} user={user} />))
                }
            </div>
        </div>
    )
};

export default UserList;
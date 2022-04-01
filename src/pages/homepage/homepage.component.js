import React from "react";
import './homepage.styles.scss';
import SalesCardList from "../../component/salescardlist/salescardlist.component";
import UserList from '../../component/userlist/userlist.component';
import UpcomingEvent from '../../component/upcoming-event/upcoming-event.component';
import SocialMediaCardList from "../../component/socialmedia-cardlist/socialmedia-cardlist.component";
import Rating from "../../component/rating/rating.component";

const Homepage = () => (
    <div className="homepage">
        <SalesCardList />
        <div className='user-event'>
            <UserList />
            <UpcomingEvent />
        </div>

        <SocialMediaCardList />
        <Rating />
    </div>
);

export default Homepage;
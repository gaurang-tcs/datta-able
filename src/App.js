import React from 'react';

import SalesCardList from './component/salescardlist/salescardlist.component';
import UserList from './component/userlist/userlist.component';
import UpcomingEvent from './component/upcoming-event/upcoming-event.component';
import './App.css';

const App = () => {
  return (
    <div>
      <SalesCardList />
      <div className='user-event'>
        <UserList />
        <UpcomingEvent />
      </div>

    </div>
  );
}


export default App;

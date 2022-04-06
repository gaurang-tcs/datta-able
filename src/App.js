import React from 'react';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
//import SideMenu from './component/sidemenu/drawer.component';

import TemporaryDrawer from './component/drawer/drawer.component';


const App = () => {
  return (
    <div className='drawer-homepage'>
     <TemporaryDrawer />
      <Homepage />
    </div>

  );
}


export default App;

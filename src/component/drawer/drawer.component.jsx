import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import './drawer.styles.scss';

import { BiHomeAlt, BiCube, BiServer } from 'react-icons/bi';
import { AiOutlineFileText } from 'react-icons/ai';
import { IoPieChartSharp, IoMapSharp } from 'react-icons/io5';
import { BiPowerOff } from 'react-icons/bi';
import { FiLock, FiSidebar } from 'react-icons/fi';


const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='drawer-details'>
        <div className='header'>
          <img src='https://i.postimg.cc/YSkh7XMQ/favicon.jpg' alt='logo' />
          <span className='app-name'>Datta Able</span>
        </div>
        <Divider />

        <span className='heading'>NAVIGATOR</span>

        <div className='dashboard' >
          <BiHomeAlt className='icon' />
          <span className='details'>Dashboard</span>
        </div>

        <span className='heading'>UI ELEMENT</span>

        <div className='dashboard' >
          <BiCube className='icon' />
          <span className='details'>Components</span>
        </div>

        <span className='heading'>FORMS & TABLES</span>

        <div className='dashboard' >
          <AiOutlineFileText className='icon' />
          <span className='details'>Form Elements</span>
        </div>

        <div className='dashboard' >
          <BiServer className='icon' />
          <span className='details'>Table</span>
        </div>

        <span className='heading'>CHARTS & MAPS</span>

        <div className='dashboard' >
          <IoPieChartSharp className='icon' />
          <span className='details'>Charts</span>
        </div>

        <div className='dashboard' >
          <IoMapSharp className='icon' />
          <span className='details'>Maps</span>
        </div>

        <span className='heading'>PAGES</span>

        <div className='dashboard' >
          <FiLock className='icon' />
          <span className='details'>Authentication</span>
        </div>

        <div className='dashboard' >
          <FiSidebar className='icon' />
          <span className='details'>Sample page</span>
        </div>

        <div className='dashboard' >
          <BiPowerOff className='icon' />
          <span className='details'>Disabled menu</span>
        </div>
      </div>

    </Box>
  );

  return (
    <div className='drawer'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='out-drawer'>
            <img src="https://i.postimg.cc/YSkh7XMQ/favicon.jpg" alt='logo' onClick={toggleDrawer(anchor, true)} />

            <Divider />

            <div className='icons'>
              <BiHomeAlt className='icon' />
            </div>

            <Divider />

            <div className='icons'>
              <BiCube className='icon' />
            </div>

            <Divider />

            <div className='icons'>
              <AiOutlineFileText className='icon' />
            </div>
            <div className='icons'>
              <BiServer className='icon' />
            </div>

            <Divider />

            <div className='icons'>
              <IoPieChartSharp className='icon' />
            </div>
            <div className='icons'>
              <IoMapSharp className='icon' />
            </div>

            <Divider />


            <div className='icons'>
              <FiLock className='icon' />
            </div>
            <div className='icons'>
              <FiSidebar className='icon' />
            </div>
            <div className='icons'>
              <BiPowerOff className='icon' />
            </div>

          </div>



          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>

        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;
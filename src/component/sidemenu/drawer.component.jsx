import React, { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';

import { Drawer, Box, Typography, IconButton } from '@mui/material';

import './drawer.styles.scss';

const SideMenu = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
    <div className="sidemenu">
    <IconButton size= 'large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
    </IconButton>
        <Drawer
            anchor='left'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            >
       
            <Box p={2} width='20rem' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div' >
                    side panel
                </Typography>
            </Box>
              
        </Drawer>
  </div> 

    );
};


export default SideMenu;
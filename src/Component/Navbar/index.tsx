import React, { FC } from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@mui/material';

const Navbar: FC = () => {
  return (
    <AppBar
      enableColorOnDark
      position="relative"
      component="nav"
      style={{
        boxShadow: 'none',
      }}
    >
      <Toolbar disableGutters>
        <Typography variant="h4" component="p" sx={{ m: 'auto' }}>Code Notes</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const toolbar = ( props ) => (
    // <header className={classes.Toolbar}>
    //     <DrawerToggle clicked={props.drawerToggleClicked} />
    //     <div className={classes.Logo}>
    //         <Logo />
    //     </div>
    //     <nav className={classes.DesktopOnly}>
    //         <NavigationItems />
    //     </nav>
    // </header>
    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Burger Builder
    </Typography>
    <div className={classes.menus}>
    <NavigationItems /> 
    </div>
  </Toolbar>
</AppBar>
);

export default toolbar;
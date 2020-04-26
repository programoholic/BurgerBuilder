import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Button from '@material-ui/core/Button';
import Auth from '../../../core/Auth';
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/users">Users</NavigationItem>
        {/* <Button variant="contained">Default</Button> */}
        <Button style={{float : 'right'}} variant="contained" onClick={()=>{Auth.authenticate()}}> Login </Button> 
    </ul>
);

export default navigationItems;
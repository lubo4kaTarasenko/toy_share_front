import {AppBar,Toolbar, Grid, IconButton} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import {Home, AccountBox } from '@material-ui/icons';

export default function Footer(){
  return(
    <AppBar position="static"> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={3} md={2} lg={5} className='header_item'> <h2>ToyShare</h2></Grid> 
            <Grid item xs={5} md={3} lg={2} className='header_item'><h4>Home</h4></Grid>
          </Grid>
        </Toolbar>
   </AppBar>
  ) 
}
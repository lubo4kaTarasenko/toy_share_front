import {AppBar,Toolbar, Grid, IconButton} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import {Home, AccountBox } from '@material-ui/icons';
import {Phone, Email, LocationOn } from '@material-ui/icons';

export default function Footer(){
  return(
    <AppBar position="static"> 
        <Toolbar className='nav_cont footer_c'> 
         <Grid container>
            <Grid item xs={6} md={3} lg={3} className='header_item'> <h4>ToyShare</h4></Grid> 
            <Grid item xs={6} md={3} lg={3} className='header_item'>
              <h4><Phone className='footer_i'/> <span className='footer_t'>333 333 3333</span></h4></Grid> 
            <Grid item xs={6} md={3} lg={3} className='header_item'>
              <h4><Email className='footer_i'/> <span className='footer_t'>blabla@gmail.com</span></h4></Grid>
            <Grid item xs={6} md={3} lg={3} className='header_item'><h4>
              <LocationOn className='footer_i'/><span className='footer_t'> Ukraine, Cherkasy, 2020</span></h4></Grid> 
          </Grid>
        </Toolbar>
   </AppBar>
  ) 
}
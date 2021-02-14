import {AppBar,Toolbar, Grid, IconButton, Button} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import {Home, AccountBox } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import SearchComponent from './search';

export default function Header(){
  return(
    <AppBar position="static" style={{backgroundColor: pink}}> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={3} md={2} lg={3} className='header_item'> <h2>ToyShare</h2></Grid> 
            <Grid item xs={3} md={2} lg={4} className='header_item'><SearchComponent/></Grid>
            <Grid item xs={5} md={3} lg={5} className='header_item'>
              <Button className='header_buttons' variant='contained' size='large'>Home</Button>
              <Button className='header_buttons' variant='contained' size='large'>Profile</Button>
              <Button className='header_buttons' variant='contained' size='large'>About us</Button>
              <Button className='header_buttons' variant='contained' size='large'>Log out</Button>
            </Grid>
          </Grid>
        </Toolbar>
   </AppBar>
  ) 
}
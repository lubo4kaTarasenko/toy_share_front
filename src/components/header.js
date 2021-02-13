import {AppBar,Toolbar, Grid, IconButton, Button} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import {Home, AccountBox } from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';

export default function Header(){
  return(
    <AppBar position="static" style={{backgroundColor: pink}}> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={3} md={2} lg={5} className='header_item'> <h2>ToyShare</h2></Grid> 
            <Grid item xs={5} md={3} lg={2} className='header_item'>
              <Button
               variant='contained'
               style={{
                background: 'pink', 
                color: 'rgb(65 157 173)',
                fontWeight: 'bold', 
                marginTop: '11px'
              }}>Home</Button>
            </Grid>
          </Grid>
        </Toolbar>
   </AppBar>
  ) 
}
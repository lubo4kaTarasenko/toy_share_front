import {AppBar,Toolbar, Grid, IconButton, Button} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import {Home, AccountCircle, Info, PowerSettingsNew} from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import SearchComponent from './search';
import { fullPath } from '../services/baseUrl';
import {  BrowserView,  MobileView,  isBrowser,  isMobile } from "react-device-detect";

export default function Header(){
  return(
    <AppBar position="static" style={{backgroundColor: pink}}> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={3} md={2} lg={3} className='header_item'> <h2>ToyShare</h2></Grid> 
            <Grid item xs={3} md={2} lg={4} className='header_item'><SearchComponent/></Grid>
            <Grid item xs={5} md={3} lg={5} className='header_item'>
              {isMobile ? forMobile() : forDesktop()}
            </Grid>
          </Grid>
        </Toolbar>
   </AppBar>
  )
  function forMobile(){
    return(
      <React.Fragment>
          <Link to="/home"><Home className='header_buttons'/></Link>
          <a href={fullPath('/users/sign_in')}><AccountCircle className='header_buttons' /></a>                
          <Link to="/aboutUs"><Info className='header_buttons'/></Link>
          <PowerSettingsNew className='header_buttons'/>
      </React.Fragment>
  )}

  function forDesktop(){
    return(
      <React.Fragment>
        <Button className='header_buttons' variant='contained' size='large'>
          <Link to="/home">Додому</Link>
        </Button>
        <Button className='header_buttons' variant='contained' size='large'>
          <a href={fullPath('/users/sign_in')} >Профіль</a>                
        </Button>
        <Button className='header_buttons' variant='contained' size='large'>
          <Link to="/aboutUs">Про нас</Link>
        </Button>
        <Button className='header_buttons' variant='contained' size='large'>Вийти</Button>
      </React.Fragment>
    )
  }
   
}
//<Link to="/profile">Профіль</Link>
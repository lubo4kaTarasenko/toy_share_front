import {AppBar,Toolbar, Grid, Button} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import {Home, AccountCircle, Info, PowerSettingsNew} from '@material-ui/icons';
import { pink } from '@material-ui/core/colors';
import SearchComponent from './search';
import { fullPath } from '../services/baseUrl';
import { isMobile } from "react-device-detect";
import { emailAtom } from '../atoms/appAtoms'
import { useAtom } from 'jotai'

export default function Header(){
  const [email, setEmail] = useAtom(emailAtom)
  return(
    <AppBar position="static" style={{backgroundColor: pink}}> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={3} sm={4} md={3} lg={3} className='header_item'> <h2>ToyShare</h2></Grid> 
            <Grid item xs={9} sm={5} md={4} lg={4} className='header_item'><SearchComponent/></Grid>
            <Grid item xs={12} sm={3} md={5} lg={5} className='header_item'>
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
      </React.Fragment>
  )}

  function forDesktop(){
    return(
      <React.Fragment>
        <Button className='header_buttons' variant='contained' size='large'>
          <Link to="/home">Додому</Link>
        </Button>
        <Button className='header_buttons' variant='contained' size='large'>
            {email? <Link to='/profile'> Профіль </Link> : <a href={fullPath('/users/sign_in')}>Профіль </a> }               
        </Button>
        <Button className='header_buttons' variant='contained' size='large'>
          <Link to="/aboutUs">Про нас</Link>
        </Button>
      </React.Fragment>
    )
  }
   
}
//<Link to="/profile">Профіль</Link>
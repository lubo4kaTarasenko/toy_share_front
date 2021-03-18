import React, {useState, useEffect} from 'react'
import {Grid, Paper, Button} from '@material-ui/core';
import ProfileTabs from './profileTabs';
import cookie from 'react-cookies'
import UserApi from '../services/userApi';
import { useAtom } from 'jotai'
import {emailAtom, userAtom } from '../atoms/appAtoms'
import { Redirect} from "react-router-dom";
import EditProfile from './editProfile';

export default function Profile() {
  const [email, setEmail] = useAtom(emailAtom)
  const [user, setUser] = useAtom(userAtom)
  useEffect(() =>{loadUser()}, []) 

  function loadUser(){
    new UserApi().profileInfo().then(
      (result) => {
        setUser(result.user);
      },
    )
  }
  if(email === '' || !email) return <Redirect push to={'/'} />
    return (
      <Paper id='home_cont'>
        <Grid container style={{paddingTop: '30px', background: '#f2bfcaa3', marginTop: '-30px'}}>
          <Grid item xs={6} sm={3} md={3} lg={2}  className='profile_info'>     
            <div className='profile_ava'>
              {user.avatar ? <img src={user.avatar} className='avatar'/>  : <img src='/ava.png' className='avatar'/> }
            </div>            
          </Grid>
          <br/>
          <Grid item xs={6} sm={5} md={5} lg={4} className='profile_products'>     
            <div className='profile name'><b style={{fontSize: '25px'}}>{user.name || email}</b></div>
            <div className='profile name'><b>rating</b></div>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={6}>
            <Button  size='large' className='profile_buttons' onClick={() => {logOut()}}>Вийти</Button>
            <EditProfile/>
          </Grid>
        </Grid>
        <ProfileTabs/>          
      </Paper>
  )

  function logOut(){    
    new UserApi().deleteSession().then(
      (result) => {
        console.log(result) 
        cookie.remove('email', { path: '/' })
        setEmail('')         
    })
  }
}
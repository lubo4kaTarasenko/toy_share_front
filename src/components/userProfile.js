import React, {useState, useEffect} from 'react'
import {Grid, Paper} from '@material-ui/core';
import UserProfileTabs from './userProfileTabs';
import UserApi from '../services/userApi';

export default function UserProfile(props) {
  const[user, setUser] = useState({})

  useEffect(() =>{loadUser()}, []) 

  function loadUser(){
    new UserApi().userProfileInfo(props.match.params.email).then(
      (result) => {
        setUser(result.user);
      },
    )
  }
    return (
      <Paper  className='all_containers'>
        <Grid container style={{paddingTop: '30px', background: '#f2bfcaa3', marginTop: '-30px'}}>
          <Grid item xs={6} sm={3} md={3} lg={2}  className='profile_info'>     
            <div className='profile_ava'>
              {user.avatar ? <img src={user.avatar} className='avatar'/>  : <img src='/ava.png' className='avatar'/> }
            </div>            
          </Grid>
          <br/>
          <Grid item xs={6} sm={5} md={5} lg={4} className='profile_products'>     
            <div className='profile name'><b style={{fontSize: '25px'}}>{user.name || user.email}</b></div>
            <div className='profile name'><b>rating</b></div>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={6}>
          </Grid>
        </Grid>
       { user.email && <UserProfileTabs email={user.email}/> }   
      </Paper>
  )
}
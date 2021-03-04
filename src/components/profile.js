import {React, useEffect} from 'react'
import {Grid, Paper, Button} from '@material-ui/core';
import ProfileTabs from './profileTabs';

export default function Profile() {

    return (
      <Paper id='home_cont'>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}  className='profile_info'>     
            <div className='profile ava'><img src='/ava.jpg' className='avatar'/></div>
            <div className='profile name'><b>name</b></div>
            <div className='profile name'><b>rating</b></div>
            <Button  size='large'>Logout</Button>            
          </Grid>
          <br/>
          <Grid item xs={12} sm={12} md={12} lg={12} className='profile_products'>     
            <ProfileTabs/>
          </Grid>
        </Grid>

          
      </Paper>
  )
}
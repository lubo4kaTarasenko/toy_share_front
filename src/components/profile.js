import {React, useEffect} from 'react'
import {Grid, Paper, Button} from '@material-ui/core';
import ProfileTabs from './profileTabs';

export default function Profile() {

    return (
      <Paper id='home_cont'>
        <Grid container style={{paddingTop: '30px', background: '#f2bfcaa3', marginTop: '-30px'}}>
          <Grid item xs={6} sm={3} md={3} lg={2}  className='profile_info'>     
            <div className='profile_ava'><img src='/ava.png' className='avatar'/></div>            
          </Grid>
          <br/>
          <Grid item xs={6} sm={5} md={5} lg={4} className='profile_products'>     
            <div className='profile name'><b style={{fontSize: '25px'}}>Vasya Shapochnik</b></div>
            <div className='profile name'><b>rating</b></div>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={6}>
            <Button  size='large' className='profile_buttons'>Logout</Button>
            <Button  size='large' className='profile_buttons'>Edit</Button>
          </Grid>
        </Grid>
        <ProfileTabs/>

          
      </Paper>
  )
}
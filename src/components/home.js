import {React, useEffect} from 'react'
import {Grid, Paper} from '@material-ui/core';
import AddProduct from './addProduct';

export default function HomePage() {

    return (
      <Paper id='home_cont'>
        <Grid container>
          <Grid item  xs={12} md={8} lg={5} >
            <AddProduct/>
          </Grid>
          <Grid item xs={12} md={4} lg={7} ></Grid>          
        </Grid>     
          
      </Paper>
  )
}
import {React, useEffect} from 'react'
import {Paper} from '@material-ui/core';
import AddProduct from './addProduct';

export default function HomePage() {

    return (
      <Paper id='home_cont'>     
          <AddProduct/>
      </Paper>
  )
}
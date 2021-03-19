import React, { useEffect, useState} from 'react'
import { Paper } from '@material-ui/core';
import ProfileProductsApi from '../services/profileProductsApi';
import ProductList from './productsList';


export default function UserGiveProducts(props) {
  const[profileProducts, setProfileProducts] = useState([])
  useEffect(() => {
    loadListOfProducts()
  }, [])
  return (
    <Paper >
      <ProductList products={profileProducts}/>                
    </Paper>
  )
  function loadListOfProducts(){
    new ProfileProductsApi().userGetList(props.kind, props.status, props.email).then(
      (result) => {
        setProfileProducts(result.products)          
      })
   }
}
import React, { useEffect, useState} from 'react'
import { Paper } from '@material-ui/core';
import ProfileProductsApi from '../services/profileProductsApi';
import ProductList from './productsList';


export default function GiveProducts(props) {
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
    new ProfileProductsApi().getList(props.kind, props.status).then(
      (result) => {
        setProfileProducts(result.products)          
      })
   }
}
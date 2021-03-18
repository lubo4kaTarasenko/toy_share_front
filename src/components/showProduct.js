import React from 'react';
import ProductsApi from '../services/productsApi';
import {ShoppingCart, Star } from '@material-ui/icons';
import {Paper, Grid, IconButton} from '@material-ui/core';
import ProductImages from './productImages';
import cookie from 'react-cookies'
import { useAtom } from 'jotai'
//import {cartAtom} from '../atoms/shopAtoms'
import {useEffect, useState} from 'react'
//import ShowAllComments from './showAllComments';

export default function ShowProduct(props) {  
  const [product, setProduct] = useState({ images: [] })
  // const [comments, setComments] = useState([])
  // const [newComment, setNewComment] = useState([])
  useEffect(() =>{loadProduct()}, []) 
  //const [cart, setCart] = useAtom(cartAtom)

  function loadProduct(){
    new ProductsApi().getProduct(props.match.params.url_name).then(
      (result) => {
        setProduct(result.product);
        // setComments(result.comments);
        // setNewComment(result.new_comment);
      },
    )
  }
  return(  
    <div>    
        <Grid container  style={{paddingTop: '20px'}}>     
          <Grid item xs={12} sm={2} md={12} lg={2} ></Grid>     
          <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className='show_product_paper'>
            <div className='product_show_img'>
              {(product.images).length > 0 ? <ProductImages/> : <img src='/product.jpeg' width='200px' alt=''/>}
            </div>
          </Paper>
          </Grid>  
          <Grid item xs={12} sm={4} md={8} lg={4}>   
            <Paper className='show_product_paper'>                 
              <div className='product_show_name show'><b>назва: </b> {product.name}</div>                    
              <div className='product_show_description show'><b>категорія: </b>{product.category}</div>
              <div className='product_show_country show'><b>підкатегорія: </b>{product.subcountry}</div> 
              <div className='product_show_price show'><b>тип: </b>{product.kind} $ </div>
              <IconButton 
                variant='contained' className='category_btn'
                style={{color: 'green'}}
                >                     
              <ShoppingCart  fontSize='large'/>
                BUY
            </IconButton>
      
            </Paper>                
          </Grid>                       
        </Grid>  
        {/* <Grid container >        
            <Grid item xs={12} sm={2} md={12} lg={2} ></Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              {
                product.id && <ShowAllComments loadProduct={ loadProduct } product_id={product.id} 
                                               comments={comments} newComment={newComment} />
              }
            </Grid> 
        </Grid>        */}
      </div>
  )

  // function addToCart(){
  //   let currentCart = JSON.parse(JSON.stringify(cart))
  //   if(currentCart[product.id]){
  //     currentCart[product.id].count++
  //   }
  //   else{
  //     currentCart[product.id] = { 
  //       'price': product.price, 
  //       'count': 1,
  //       'name': product.name,
  //       'id': product.id
  //     }
  //   }
  //   cookie.save('cart', currentCart, { path: '/' })
  //   setCart(currentCart)
  // }

  // function addedNumber() {
  //   if(cart[product.id]){
  //     return `Added to cart ${ cart[product.id].count > 1 ? `x${cart[product.id].count}` : '' }`
  //   } else {
  //     return '';
  //   }
  // }
}
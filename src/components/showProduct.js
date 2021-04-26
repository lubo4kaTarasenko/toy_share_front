import React from 'react';
import ProductsApi from '../services/productsApi';
import ProfileProductsApi from '../services/profileProductsApi';
import {ChildCare, CropLandscapeOutlined } from '@material-ui/icons';
import {Paper, Grid, IconButton} from '@material-ui/core';
import ProductImages from './productImages';
import { useAtom } from 'jotai'
import {productImagesAtom, emailAtom} from '../atoms/appAtoms'
import {useEffect, useState} from 'react'
import ShowAllComments from './showAllComments';
import SelectToChange  from './selectToChange';


export default function ShowProduct(props) {  
  const [product, setProduct] = useState({ images: [] })
  const [comments, setComments] = useState([])
  useEffect(() =>{loadProduct()}, []) 
  const [images, setImages] = useAtom(productImagesAtom)
  const [email, setEmail] = useAtom(emailAtom)
  const [productsToChange, setProductsToChange] = useState([])

  function loadProduct(){
    new ProductsApi().getProduct(props.match.params.url_name).then(
      (result) => {
        setProduct(result.product);
        setImages(result.product.images)
        setComments(result.comments);
      },
    )
  }
  return(  
    <div className='all_containers'>    
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
              <div className='product_show_price show'><b>тип: </b>{product.kind} </div>                                 
              {product.user == email ?  <></> : 
                <IconButton  variant='outlined' className='category_btn' style={{marginLeft: '20px'}} onClick={()=>{getThing(product)}}>
                <ChildCare  fontSize='large'/> Отримати </IconButton> }
              { productsToChange.length > 0 ? <SelectToChange products={productsToChange} id={product.id}/> : <button>Stupid</button>}
            </Paper>                
          </Grid>                       
        </Grid>  
        <Grid container >        
            <Grid item xs={12} sm={2} md={12} lg={2} ></Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              {
                product.id && <ShowAllComments loadProduct={ loadProduct } product_id={product.id} 
                                               comments={comments} />
              }
            </Grid> 
        </Grid>       
      </div>
  )

  function getThing(product){
    if(product.kind == 'подарую'){
      new ProductsApi().wannaThing(product.id).then(
        (result) => {
          console.log('yep')              
        })
    }
    else{
      new ProfileProductsApi().getList('обміняю', 'published').then(
        (result) => {
          //result.products.length > 0 ? setProductsToChange(result.products) :  setProductsToChange("Ви ще не додали речей для обміну")    
          console.log(result)
          setProductsToChange((result.products || []).length > 0 ? result.products : "Ви ще не додали речей для обміну") 
        })
    }
  }
}
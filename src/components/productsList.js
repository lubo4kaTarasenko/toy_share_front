import Paper from '@material-ui/core/Paper';
import { Redirect} from "react-router-dom";
import { useAtom } from 'jotai'
import {productsAtom } from '../atoms/appAtoms'
import { useState } from 'react'

export default function ProductList(props) {
  const [showProduct, setShowProduct] = useState(null);
  if(showProduct) {
    return productRedirect(showProduct.url_name)
  }
  return (
    <div id='products'>
      { props.products.map(product => {
          return (
            <div onClick={() =>{ setShowProduct(product) }} key={product.id} className="product_block">
          <Paper className="product_container" >
              <div className='product_attr'>
                <b>{product.name}</b>
              </div>
              <div className='product_attr' >
                <i>{product.category}/{product.subcategory}</i>
              </div >
              <div className='product_attr'>
                {product.image ? <img src={product.image} width='100px' alt=''/> : <img src='/product.jpeg' width='100px' alt=''/>}
              </div >
              <div className='product_attr'>
                <h3>{product.kind}</h3>
              </div >
              <div className='product_attr'>
                <a href='#' style={{color: '#4b9dad'}}>{product.user}</a>
              </div >
        </Paper>  
      </div> 
          )
      }           
              
      )}
    </div>
  )
  function productRedirect(url_name){  
    return(
      <Redirect push to={`/product/${url_name}`}/>
    )
  }
}
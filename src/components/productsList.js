import Paper from '@material-ui/core/Paper';
import { Redirect} from "react-router-dom";
import ProductsApi from '../services/productsApi';
import { useState } from 'react'
import { Button } from '@material-ui/core';
import {DeleteForever} from '@material-ui/icons'
import { useAtom } from 'jotai'
import { emailAtom  } from '../atoms/appAtoms'
import { Link } from "react-router-dom";

export default function ProductList(props) {
  const [showProduct, setShowProduct] = useState(null);
  const [email, setEmail] = useAtom(emailAtom)
  if(showProduct) {
    return productRedirect(showProduct.url_name)
  }
  
  return (
    <div id='products'>
      {props.products.map(product => {
          return (
            <div key={product.id} className="product_block">          
              <Paper className="product_container" >
                <div classname='clickable' onClick={() =>{ setShowProduct(product) }} style={{cursor: 'pointer'}}>
                  <div className='product_attr'>
                    <b>{product.name}</b>
                  </div>
                  <div className='product_attr' >
                    <i>{product.category}/{product.subcategory}</i>
                  </div >
                  <div className='product_attr'>
                    {product.image ? <img src={product.image} width='100px' alt=''/> : <img src='/product.jpeg' width='100px' alt=''/>}
                  </div >
                </div>
                  <div className='product_attr'>
                    <h3>{product.kind} 
                      {product.user == email ? deleteButton(product) : <></> }
                    </h3>
                  </div >
                  <div className='product_attr'>
                    <Link to={`/userProfile/${product.user}`} style={{color: '#4b9dad'}}> {product.user}</Link>
                  </div >
              </Paper>  
            </div> 
          )
      }           
              
      )}
    </div>
  )
  function deleteButton(product){
    return(
      <Button color='secondary' name='видалити' onClick={()=> deleteProduct(product.id)}><DeleteForever/></Button>
    )
  }
  function productRedirect(url_name){  
    return(
      <Redirect push to={`/product/${url_name}`}/>
    )
  }
  function deleteProduct(id){
    if(window.confirm("Ви впевнені, що хочете видалити річ?")){
      new ProductsApi().deleteProduct(id).then(
        (result) => {
          alert('Продукт успішно видалений')
          props.loadListOfProducts()     
        })
    }
  }
}
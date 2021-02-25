import React, { useEffect} from 'react'
import {Grid, Paper} from '@material-ui/core';
import AddProduct from './addProduct';
import CategoriesList from './categoriesList';
import {categoriesAtom, productsAtom, pagesAtom, paramsAtom  } from '../atoms/appAtoms'
import CategoriesApi from '../services/categoriesApi';
import ProductsApi from '../services/productsApi';
import ProductsList from './productsList';
import { useAtom } from 'jotai'
import cookie from 'react-cookies'

export default function HomePage() {
  const [products, setProducts] = useAtom(productsAtom)
  const [pages, setPages] = useAtom(pagesAtom)
  const [categories, setCategories] = useAtom(categoriesAtom)
  const [params, setParams] = useAtom(paramsAtom)

  useEffect(() => {
    //console.log(products.length)
    loadListOfProducts()
    loadListOfCategories()
  }, [])

  function loadListOfCategories(){
    new CategoriesApi().getList().then(
      (result) => {
        setCategories(result.categories)          
      }
  )}

  function loadListOfProducts(){
    new ProductsApi().getListByParams(params).then(
      (result) => {
        dispatchUpdateState(result.products, result.pages)
        if (result.user){
          cookie.save('email', result.user.email, { path: '/' })
        }
      }
  )}

  function dispatchUpdateState(products, pages){
    setProducts(products)
    setPages(pages)
  }

    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12} sm={6} md={2} sm={2} className='categories_grid'>
            <Paper>
              <CategoriesList/>
            </Paper>
          </Grid>  
            <Grid item  xs={12} sm={6} md={10} lg={10} >      
              <Paper id='home_cont'> 
                <AddProduct/>
                <ProductsList/>
              </Paper>
            </Grid>  
       
        </Grid>
      </React.Fragment>
  )
}
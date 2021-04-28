import React, { useEffect} from 'react'
import {Grid, Paper, Typography} from '@material-ui/core';
import AddProduct from './addProduct';
import CategoriesList from './categoriesList';
import {categoriesAtom, productsAtom, pagesAtom, paramsAtom, emailAtom  } from '../atoms/appAtoms'
import CategoriesApi from '../services/categoriesApi';
import ProductsApi from '../services/productsApi';
import ProductsList from './productsList';
import { useAtom } from 'jotai'
import cookie from 'react-cookies'
import Pagination from '@material-ui/lab/Pagination';
import TelegramButton from './telegramButton';

export default function HomePage() {
  const [products, setProducts] = useAtom(productsAtom)
  const [pages, setPages] = useAtom(pagesAtom)
  const [categories, setCategories] = useAtom(categoriesAtom)
  const [params, setParams] = useAtom(paramsAtom)
  const [email, setEmail] = useAtom(emailAtom)

  useEffect(() => {
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
          cookie.save('email', result.user, { path: '/' })
          setEmail(result.user)
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
          <Grid item xs={12} sm={6} md={2} lg={2} className='categories_grid'>
            <Paper>
              <CategoriesList/>
            </Paper>
          </Grid>  
            <Grid item  xs={12} sm={6} md={10} lg={10} >      
              <Paper className='all_containers'> 
                {email ? (<div><AddProduct/> <TelegramButton/></div>) : null}
                <ProductsList products={products} loadListOfProducts={loadListOfProducts} />
              </Paper>
            </Grid>  
       
        </Grid>
        <Grid container > 
          <Grid item xs={1} sm={5}></Grid>
          <Grid item xs={11} sm={4} className='page_grid'>
            <Paper>            
            <Pagination count={pages} variant="outlined" shape="rounded" id='paginator'
              onChange={(e, page)=>{                
                params.page = page;
                setParams(params)
                loadListOfProducts(params) 
              } }
            /> </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
  )
}
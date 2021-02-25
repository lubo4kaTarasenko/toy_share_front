import React, { useEffect} from 'react'
import {Grid, Paper} from '@material-ui/core';
import AddProduct from './addProduct';
import CategoriesList from './categoriesList';
import {categoriesAtom } from '../atoms/appAtoms'
import CategoriesApi from '../services/categoriesApi';
import { useAtom } from 'jotai'

export default function HomePage() {
  const [categories, setCategories] = useAtom(categoriesAtom)
  useEffect(() => {
    //console.log(products.length)
    //loadListOfProducts()
    loadListOfCategories()
  }, [])

  function loadListOfCategories(){
    new CategoriesApi().getList().then(
      (result) => {
        setCategories(result.categories)          
      },
    )
  }

    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={6} sm={6} md={2} sm={2} className='categories_grid'>
            <Paper>
              <CategoriesList/>
            </Paper>
          </Grid>
          <Paper id='home_cont'> 
             <Grid item  xs={12} sm={6} md={10} lg={10} >      
                <AddProduct/>
              </Grid>            
          </Paper>
        </Grid>
      </React.Fragment>
  )
}
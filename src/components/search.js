import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Search } from '@material-ui/icons';
import ProductsApi from '../services/productsApi';
import { useAtom } from 'jotai'
import {productsAtom, pagesAtom, categoriesAtom, paramsAtom } from '../atoms/appAtoms'

export default function SearchComponent() {
  const [products, setProducts] = useAtom(productsAtom)
  const [pages, setPages] = useAtom(pagesAtom)
  const [params, setParams] = useAtom(paramsAtom)
  return (
    <Autocomplete
      id="search_complete"
      options={products}
      getOptionLabel={(option) => option.name}
      style={{ width: 250 }}
      clearOnBlur={false}
      onInputChange={(e, v) => {loadListOfProducts(v)}}
      renderInput={(params) => <TextField {...params}  label={<Search/>} variant="filled" id='search_input' size='small' />}
    />
  );

  function dispatchUpdateState(products, pages){
    setProducts(products)
    setPages(pages)
  }

  function loadListOfProducts(v){    
    params.search = v;
    setParams(params)
    new ProductsApi().getListByParams(params).then(
      (result) => {
        dispatchUpdateState(result.products, result.pages)
      },
    )
  }
}
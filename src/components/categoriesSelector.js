import React, { useState} from 'react'
import {FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import {categoriesAtom } from '../atoms/appAtoms'
import { useAtom } from 'jotai'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CategoriesSelector() {
  const [categories, setCategories] = useAtom(categoriesAtom)
  const classes = useStyles();
  const [category, setCategory] = useState(categories[0])
  const [subcategory, setSubcategory] = useState(category.subcategories[0])


  const handleChangeCategory = (event) => {
    const newCat = categories.find(el => el.name === event.target.value);
    setCategory(newCat);
    setSubcategory(newCat.subcategories[0])
  };
  const handleChangeSubcategory = (event) => {
    setSubcategory(event.target.value);
  };

    return (
      <React.Fragment> 
        <FormControl className={classes.formControl}>
          <InputLabel>Категорія</InputLabel>
          <Select
            id='category'
            value={category.name}
            onChange={handleChangeCategory}
          >
          {categories.map( cat => 
           <MenuItem key={cat.id} value={cat.name}>{cat.name}</MenuItem>           
          )}
        </Select>
      </FormControl> 
      <FormControl className={classes.formControl}>
          <InputLabel>Підкатегорія</InputLabel>
          <Select
            id='subcategory'
            value={subcategory}
            onChange={handleChangeSubcategory}
          >
          {category.subcategories.map( subcat => 
           <MenuItem key={subcat} value={subcat}>{subcat}</MenuItem>           
          )}
        </Select>
      </FormControl>       
          
      </React.Fragment>
  )
}
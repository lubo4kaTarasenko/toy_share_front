import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import ProductsApi from '../services/productsApi';

export default function SelectProduct(props) {
  const [value, setValue] = React.useState(props.products[0].id);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{value}</FormLabel>
      <RadioGroup aria-label="product" name="product" value={value} onChange={handleChange}>
        {props.products.map(product => {
          return (<FormControlLabel key={product.id} value={product.id} checked={ product.id == value }  control={<Radio />} label={product.name} />)
        })}
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={confirmSelect(value)}>
        Готово
      </Button>
    </FormControl>
  );

  function confirmSelect(){
    new ProductsApi().thingToChange(props.id, value).then(
      (result) => {
        console.log('yep')              
    })
  }
}
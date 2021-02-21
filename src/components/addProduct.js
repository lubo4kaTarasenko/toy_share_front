import {React, useEffect} from 'react'
import {Paper, TextField, TextareaAutosize, Button} from '@material-ui/core';
import DropZone from './dropZone';

export default function AddProduct() {

    return (
      <Paper id='add_product'>
        <h3> Додати річ </h3> 
        <TextField id="product_name" className='form_input' label="Назва" size='small'/>
        <TextareaAutosize aria-label="minimum height" className='form_input' rowsMin={5} placeholder="Опис" />
        <DropZone></DropZone>
        <Button className='form_buttons'> Зберегти </Button>
      </Paper>
  )
}
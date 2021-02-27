import {React, useEffect, useState} from 'react'
import {Paper, TextField, TextareaAutosize, Button} from '@material-ui/core';
import DropZone from './dropZone';
import { useAtom } from 'jotai'
import { filesAtom } from '../atoms/appAtoms'
import ProductsApi from '../services/productsApi';


export default function AddProduct() {
  const [files, setFiles] = useAtom( filesAtom)
  const [showForm, setShowForm] = useState(false)
  console.log(files)
    return (      
      showForm ? renderForm() : <Button onClick={() => {setShowForm(true)}} className='form_buttons'>Додати річ</Button>      
    )

  function renderForm(){
    return(
      <Paper id='add_product'>
      <h3> Додати річ </h3> 
      <TextField id="product_name" className='form_input' label="Назва" size='small' required/>
      <TextareaAutosize aria-label="minimum height" id='description' className='form_input' rowsMin={5} placeholder="Опис" required />
      <DropZone></DropZone>
        <i style={{fontSize: 'small'}}><b>Загружено {files.length}</b></i>
      <br/><br/>
      <input type='radio' id='get' name='kind' value='get' checked/>
      <label for='get'>Віддам</label>
      <input type='radio' id='change' name='kind' value='change'/>
      <label for='change'>Обміняю</label>
      <br/>
      <Button className='form_buttons' onClick={() => createProduct() }> Зберегти </Button>
    </Paper>
    )
  }
   function createProduct(){
     const name = document.getElementById('product_name').value
     const description = document.getElementById('description').value
     const kind = document.querySelector('input[name="kind"]:checked').value;
     const product = {
       name: name,
       description: description,
       kind: kind,
       files: files
     }
     console.log(product)
     new ProductsApi().createProduct(product).then(
      (result) => {
        console.log(result)  
        setFiles([])     
      },
    )
   }
}
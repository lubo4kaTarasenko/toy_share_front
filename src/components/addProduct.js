import {React, useState} from 'react'
import {Paper, TextField, TextareaAutosize, Button} from '@material-ui/core';
import DropZone from './dropZone';
import { useAtom } from 'jotai'
import { filesAtom } from '../atoms/appAtoms'
import ProductsApi from '../services/productsApi';
import CategoriesSelector from './categoriesSelector';

export default function AddProduct() {
  const [files, setFiles] = useAtom( filesAtom)
  const [showForm, setShowForm] = useState(false)

  return (      
    showForm ? renderForm() : <Button onClick={() => {setShowForm(true)}} id='state_b' className='form_buttons'>Додати річ</Button>      
  )

  function renderForm(){
    return(
      <Paper id='add_product'>
      <h3> Додати річ </h3> 
      <TextField id="product_name" className='form_input' label="Назва" size='small' required/>
      <TextareaAutosize aria-label="minimum height" id='description' className='form_input' rowsMin={5} placeholder="Опис" required />
      <CategoriesSelector/>
      <DropZone></DropZone>
        <i style={{fontSize: 'small'}}><b>Загружено {files.length}</b></i>
      <br/><br/>
      <input type='radio' id='get' name='kind' value='подарую' checked/>
      <label for='get'>Подарую</label>
      <input type='radio' id='change' name='kind' value='обміняю'/>
      <label for='change'>Обміняю</label>
      <br/>
      <Button className='form_buttons' id='save_product' onClick={() => createProduct() }> Зберегти </Button>
      <Button className='form_buttons' style={{background: '#bcf2e7', color: 'rgb(75 157 173)'}} onClick={() => setShowForm(false) }>Скасувати</Button>
    </Paper>
    )
  }
  function createProduct(){
    const name = document.getElementById('product_name').value
    if (name.length < 5) return alert ('Поле з назвою має бути мінімум 5 символів')
    const description = document.getElementById('description').value
    const kind = document.querySelector('input[name="kind"]:checked').value
    const category =  document.getElementById('category').innerText
    const subcategory = document.getElementById('subcategory').innerText
    document.getElementById('save_product').disabled = true;
    let data = new FormData()
    const product = {
      name: name,
      description: description,
      kind: kind,
      category: category,
      subcategory: subcategory
    }
    let n = 0 
    files.forEach( f => {
      data.append(`data[${n}]`, f)
      n += 1
    })

    data.append('product', JSON.stringify(product))

    new ProductsApi().createProduct(data).done(() => {
      setShowForm(false)
      setFiles([])
      alert('Річ буде додана після перевірки адміністратором');
      }).fail((err) => {
      console.log("error for creating product", err);      
      });
    }
  }
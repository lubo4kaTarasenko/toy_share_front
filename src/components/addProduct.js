import {React, useEffect} from 'react'
import {Paper, TextField, TextareaAutosize, Button} from '@material-ui/core';
import DropZone from './dropZone';
import { useAtom } from 'jotai'
import { filesAtom } from '../atoms/appAtoms'

export default function AddProduct() {
  const [files, setFiles] = useAtom( filesAtom)
  console.log(files)
    return (
      <Paper id='add_product'>
        <h3> Додати річ </h3> 
        <TextField id="product_name" className='form_input' label="Назва" size='small'/>
        <TextareaAutosize aria-label="minimum height" className='form_input' rowsMin={5} placeholder="Опис" />
        <DropZone></DropZone>
         <i style={{fontSize: 'small'}}><b>Загружено {files.length}</b></i>
        <br/><br/>
        <input type='radio' id='get' name='kind'/>
        <label for='get'>Віддам</label>
        <input type='radio' id='change' name='kind'/>
        <label for='change'>Обміняю</label>
        <br/>
        <Button className='form_buttons'> Зберегти </Button>
      </Paper>
  )
}
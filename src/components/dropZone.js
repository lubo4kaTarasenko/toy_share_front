import React, { useState } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import { useAtom } from 'jotai'
import { filesAtom } from '../atoms/appAtoms'

export default function DropZone(){
  const [files, setFiles] = useAtom( filesAtom)
  const [open, setOpen] = useState(false)

  function handleSave(dFiles) {
    setFiles(files.concat(dFiles))
    setOpen(false)
  }

  return (    
    <div>
      <Button onClick={()=>{ setOpen(true)} } className='upload_buttons' variant='outlined'>
        Додати зображення
      </Button>
        <br/>
        <i style={{fontSize: 'xx-small'}}>зображення допоможуть людям дізнатися більше про вашу річ</i>
      <DropzoneDialog
          open={open}
          onSave={ (dFiles)=>{ handleSave(dFiles) } }
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={()=>{ setOpen(false) }}
      />
    </div>
  )
}

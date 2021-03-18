import React, { useState } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import { useAtom } from 'jotai'
import { avatarAtom } from '../atoms/appAtoms'

export default function ProfileDropzone(){
  const [avatar, setAvatar] = useAtom( avatarAtom)
  const [open, setOpen] = useState(false)

  function handleSave(dFiles) {
    setAvatar(dFiles[0])
    setOpen(false)
  }

  return (    
    <div>
      <Button onClick={()=>{ setOpen(true)} } className='upload_buttons' variant='outlined'>
        Додати фото профілю
      </Button>
        <br/>
        <i style={{fontSize: 'xx-small'}}>справжнє фото профілю допоможе людям Вас впізнати</i>
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
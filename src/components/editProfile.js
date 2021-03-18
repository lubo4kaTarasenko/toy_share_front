import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import ProfileDropzone from './profileDropzone';
import { useAtom } from 'jotai'
import { avatarAtom} from '../atoms/appAtoms'
import UserApi from '../services/userApi';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function EditProfile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [avatar, setAvatar] = useAtom( avatarAtom)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id}  size='large' className='profile_buttons' onClick={handleClick}>
        Редагувати профіль
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography} style={{width: '300px'}}>
          <h4>Редагувати профіль</h4>
          <TextField id="user_name" className='form_input' label="Ім'я" size='small' required/>
          <TextField id="user_soname" className='form_input' label="Фамілія" size='small' required/>
          <ProfileDropzone/>
          {avatar ? <b>Ви загрузили фото</b> : <></>}<br/>
          <Button size='large' id='save_user' className='header_buttons' style={{marginBottom: '30px'}} onClick={()=>{editProfile()}}>
            Зберегти
          </Button>
        </Typography>
      </Popover>
    </div>
  );
  function editProfile(){
    const name = document.getElementById('user_name').value
    if (name.length < 2) return alert ('Поле з іменем має бути мінімум 2 символи')
    const soname = document.getElementById('user_soname').value    
    document.getElementById('save_user').disabled = true;
    let data = new FormData()
    const user = {
      name: name,
      soname: soname
    }  
    console.log(avatar);
    data.append(`avatar`, avatar)
   
    data.append('user', JSON.stringify(user))

    new UserApi().editProfile(data).done(() => {
      setAvatar()
      alert('Профайл успішно оновлено');
      }).fail((err) => {
      console.log('error updating profile');      
    });
  }

}


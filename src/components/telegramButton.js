import React from 'react';
import { useAtom } from 'jotai'
import { emailAtom} from '../atoms/appAtoms'
import {Button} from '@material-ui/core';
import { Base64 } from 'js-base64';

export default function TelegramButton() {
  const [email, setEmail] = useAtom(emailAtom)
  const encoding_email = Base64.encode(email); 

  return (
    <Button className='form_buttons' style={{ background: '#b9f9eb', color: '#4b9dad'}}>
      <a href={`https://t.me/ToyShare_bot?start=${encoding_email}`} style={{textDecoration: 'none', color: '#2892a7'}}>Хочу отримувати повідомлення в телеграм</a>
    </Button> 
  );
}

import React from 'react';
import { useAtom } from 'jotai'
import { emailAtom} from '../atoms/appAtoms'
import {Button} from '@material-ui/core';

export default function TelegramButton() {
  const [email, setEmail] = useAtom(emailAtom)

  return (
    <Button onClick={() => {goTelegram()}} className='form_buttons' style={{ background: '#b9f9eb', color: '#4b9dad'}}>
      <a href='#' style={{textDecoration: 'none', color: '#2892a7'}}>Хочу отримувати повідомлення в телеграм</a>
    </Button> 
  );
  function goTelegram(){

  }
}
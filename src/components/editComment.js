import React from 'react';
import { Button, TextareaAutosize } from '@material-ui/core';
import CommentsApi from '../services/commentsApi';

export default function EditComment(props) {

  return (
    <div className='comment_cont'> 
      <h3 style={{textAlign: 'center'}}>Edit comment</h3>
      <TextareaAutosize aria-label="comment" 
        style={{width: '70%', margin:'10px'}}
        rowsMin={3} placeholder="comment" id='edit_body'>
        {props.comment.body}
        </TextareaAutosize>
      <div><Button variant='outlined' color='primary' onClick={() => editComment()}
           style={{ color: '#419eb0', border: '1px solid rgb(77, 170, 204)', marginLeft: '10px' }}>
        Update comment
      </Button></div>
    </div>
  );

  function editComment(){
    const body = document.getElementById('edit_body').value
    const comment = {
      id: props.comment.id,
      body: body
    }
    new CommentsApi().updateComment(comment).then(
      (result) => {
        console.log(result)
        props.loadProduct()
        props.setEditable(false)
      },
    )
  }
}
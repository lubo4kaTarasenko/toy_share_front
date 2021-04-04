import React from 'react';
import { Button, TextareaAutosize } from '@material-ui/core';
import CommentsApi from '../services/commentsApi';

export default function AddNewComment(props) {

  return (
    <div className='comment_cont'> 
      <h3 style={{textAlign: 'center'}}>New comment</h3>
      <TextareaAutosize aria-label="comment" 
        style={{width: '70%', margin:'10px'}}
        rowsMin={3} placeholder="comment" id='new_body'/>
      <div><Button variant='outlined' color='primary' onClick={() => createNewComment()}
          style={{ color: '#419eb0', border: '1px solid rgb(77, 170, 204)', marginLeft: '10px' }}>
        Create comment
      </Button></div>
    </div>
  );

  function createNewComment(){
    const body = document.getElementById('new_body').value
    const comment = {
      product_id: props.product_id,
      body: body
    }
    new CommentsApi().createComment(comment).then(
      (result) => {
        console.log(result)
        props.loadProduct()
      },
    )
  }
}
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { IconButton, Paper } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { useAtom } from 'jotai'
import { emailAtom } from '../atoms/appAtoms'
import AddNewComment from './addNewComment';
import EditComment from './editComment';
import CommentsApi from '../services/commentsApi';

export default function ShowAllComments(props) { 
  const [email] = useAtom(emailAtom) 
  const [editable, setEditable] = React.useState(false);
  return (
    <Paper style={{padding: '10px', marginBottom: '40px' }}>
      {email ? <AddNewComment product_id={props.product_id} loadProduct={props.loadProduct}/> : <></>}
      { props.comments.length > 0 && <h3 style={{textAlign: 'center'}}>Comments</h3> }
      { props.comments.map(c =>                
        <div key={c.id} className='comment_cont'>      
          <Box component="fieldset" mb={3} borderColor="transparent">            
            <Typography>{c.body}</Typography>
            <Typography><b style={{fontSize: 'small'}}>{c.email}</b>
              {renderCommentsButtons(c)}
            </Typography>
          </Box> 
      </div> 
      )}    
    </Paper>
  );
  function renderCommentsButtons(comment){
    if(email === comment.email ){
      return(
        <React.Fragment>
            <IconButton color='primary' onClick={() => setEditable(!editable) }>
              <Edit fontSize='small'/>
            </IconButton>
            <IconButton color='secondary' onClick={() => deleteComment(comment.id) }>
              <Delete fontSize='small'/>
            </IconButton>
            { editable && <EditComment comment={comment} loadProduct={props.loadProduct} setEditable={setEditable} /> }
        </React.Fragment>
    )}
  }

  function deleteComment(id){   
    new CommentsApi().deleteComment(id).then(
      (result) => {
        console.log(result)
        props.loadProduct()
      },
    )
  }
}
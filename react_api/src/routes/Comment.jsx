import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Comment() {
    const [comment, setComment] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
            console.log(response);
            setComment(response.data);
        })
    })
  return (
    <>
      <h1 className='mt-2' >Comments</h1>
      {
        comment.map((e)=>{

          return(
            <>
             <div className='p-4 m-4 bg-secondary text-white rounded-5'>
                <p className='fs-1 text-warning'>PostId: {e.postId}</p>
                <p className='fs-4'>Comment: {e.id}</p>
                <p className='fs-2 fst-italic'>{e.name}</p>
                
                <p className='fs-4'>{e.body}</p>
                <p className='fs-4'>{e.email}</p>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Comment


// https://jsonplaceholder.typicode.com/photos

// https://jsonplaceholder.typicode.com/users
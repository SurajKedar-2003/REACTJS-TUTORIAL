import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Posts() {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            
            setPost(response.data);
        })
    })
  return (
    <>
        <h1 className='mt-2' >Your posts</h1>
        {
        post.map((e)=>{
            return(
                <>
                    
                    <div className='p-4 m-4 bg-secondary text-white rounded-5'>
                        <p className='fs-1 fst-italic'>{e.title}</p>
                        <p className='fs-4'>{e.id}</p>
                        <p className='fs-4'>{e.body}</p>
                    </div>
                </>
            )
        })
    }

    </>
  )
}

export default Posts
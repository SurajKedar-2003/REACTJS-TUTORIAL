import React, {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Apicall() {
    const [post, setPost] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response);
            setPost(response.data)
        })
    })
  return (
    <>
    {
        post.map((e)=>{
            return(
                <>
                    <div style={{ width:'300px', border: "solid 2px black"}}>
                        <p style={{fontSize: '30px'}}>{e.title}</p>
                        <p>{e.id}</p>
                        <p>{e.body}</p>

                    </div>
                </>
            )
        })
    }
    </>
  )
}

export default Apicall
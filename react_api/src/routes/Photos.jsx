import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Photos() {
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
            console.log(response);
            setPhotos(response.data);
        })
    })
  return (
    <>
      {
        photos.map((e)=>{
          return(
            <>
              <div className='p-4 m-4 bg-secondary text-white rounded-5'>
                <p className='fs-1 text-warning'>albumId: {e.albumId}</p>
                <p className='fs-4'>Photo No: {e.id}</p>
                <p className='fs-2 fst-italic'>{e.title}</p>
                <div className='d-flex justify-content-around align-items-center'>
                  <img src={e.thumbnailUrl} alt="thumbnailUrl" />
                  <img src={e.url} alt="url" className='w-25 h-25' />
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Photos
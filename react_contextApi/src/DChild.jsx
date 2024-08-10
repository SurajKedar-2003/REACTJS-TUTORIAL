import React, { useContext } from 'react'
import { data,data1 } from './App';


function DChild() {
    const name = useContext(data);
    const age = useContext(data1)
  return (
   <>
        <h1>This is D component</h1>
        <h1>name : {name} || age :{age}</h1>
   </>
  )
}

export default DChild
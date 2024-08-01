import React, {useState} from 'react'
import { useEffect } from 'react';

function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    useEffect(()=>{
        console.log('useeffect called');
    }, [count])

    function incNum(){
        setNum(num+1);
    }
    function incCount(){
        setCount(count+1);
    }
  return (
    <>
        <h1>Use effect</h1>
        <button onClick={incCount} className='btn btn-warning'>Increment count</button>
        <button onClick={incNum} className='btn btn-primary'>Increment Number</button>
        <p>Increment Counter : {count}</p>
        <p>Increment Number : {num}</p>
    </>
  )
}

export default UseEffectExample
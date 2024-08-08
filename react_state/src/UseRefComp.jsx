import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

function UseRefComp() {
    const refElement = useRef();
    const [txt, setTxt] = useState();
    function handleStyle(){
        refElement.current.style.color = 'red';
        refElement.current.style.backgroundColor = 'yellow';
        refElement.current.style.fontFamily = 'monospace';

    }
    function resetHandler(){
        setTxt("");
        // refElement.current.style.allRevert = true;
    }

  return (
    <>
        <input type="text" ref={refElement} value={txt} onChange={(e)=>setTxt(e.target.value)} /> <br /><br />
        <button onClick={handleStyle}>changeStyle of text</button>
        <button onClick={resetHandler}>Reset</button>
    </>
  )
}

export default UseRefComp
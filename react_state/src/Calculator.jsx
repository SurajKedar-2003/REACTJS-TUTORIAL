import React, { useState } from 'react'

function Calculator() {
    const[txt, setText] = useState();
    const[txt2, setText2] = useState();
    const[result, setResult] = useState();


    function Operation(opr){
      if(opr==='a'){
        setResult(parseInt(txt)+parseInt(txt2));
      }
      else if(opr === 's'){
        setResult(parseInt(txt)-parseInt(txt2));
      }
      else if(opr === 'm'){
        setResult(parseInt(txt)*parseInt(txt2));
      }else if(opr === 'd'){
        setResult(parseInt(txt)/parseInt(txt2));
      }else{
        setResult(0)
      }
    } 
  return (
    <>
        <h1>Calculator</h1>
        <div>Number 1: <input type="text" placeholder='Enter number one' onChange={(e)=>setText(e.target.value)}/></div><br />
        <div>Number 2: <input type="text" placeholder='Enter number Two' onChange={(e)=>setText2(e.target.value)}/></div><br />
        <button className='btn btn-primary m-1'onClick={()=>Operation('a')}>Addition</button>
        <button className='btn btn-danger m-1' onClick={()=>Operation('s')}>Subtraction</button>
        <button className='btn btn-success m-1' onClick={()=>Operation('m')}>Multiplication</button>
        <button className='btn btn-primary m-1'onClick={()=>Operation('d')}>Division</button>

        <h2>Result: {result}</h2>
    </>
    
  )
}

export default Calculator;
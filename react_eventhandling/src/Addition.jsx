import React from 'react'

function Addition() {
    var a, b;
    function add(){
        console.log('Addition: ', parseInt(a)+parseInt(b));
    }
    function num1(event){
        a = event.target.value;
        console.log(a);
    }
    function num2(event){
        b = event.target.value;
        console.log(b);
    }
  return (
    <>
    <div>Enter num1: <input type="text" id='num1' name='num1' onChange={num1}/></div>
    <div>Enter num2: <input type="text" id='num2' name='num2' onChange={num2}/></div>
    <button className='btn btn-danger' onClick={add}>Add</button>
    </>
  )
}

export default Addition
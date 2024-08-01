import React from 'react'

function Operation(){
    let a, b;
    function add(){
        console.log("addition: ", parseInt(a)+parseInt(b));
    }
    function sub(){
        console.log("subtraction: ", parseInt(a)-parseInt(b));
    }
    function multi(){
        console.log("multiplication: ", parseInt(a)*parseInt(b));
    }
    function division(){
        console.log("division : ", parseInt(a)/parseInt(b));
    }
    function txt1(event){
        a = event.target.value;
        console.log(a);
    }
    function txt2(event){
        b = event.target.value;
        console.log(b);
    }
    return(
        <>
        <div>num1 : <input type="text" name='num1' id='num1' onChange={txt1}/></div><br />
        <div>num2 : <input type="text" name='num2' id='num2' onChange={txt2}/></div><br />
        <button className='btn btn-primary m-2' onClick={add}>Add</button>
        <button className='btn btn-success m-2' onClick={sub}>Subtract</button>
        <button className='btn btn-danger m-2' onClick={multi}>Multi</button>
        <button className='btn btn-warning m-2'onClick={division}>Division</button>
        </>
    )
}
export default Operation;
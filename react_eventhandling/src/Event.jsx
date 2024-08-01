import React from 'react'
function Event(){
    function txtHandler(event){
        let text = document.getElementById('t1').value;
        console.log(text);
        console.log('button click');
    }
    function txtHandler1(event){
        console.log(event.target.value);
    }
    return(
        <>
        <h1 className='text-primary display-4'> Event Handling</h1>
        <input type="text" id='t1' name='t1' onChange={txtHandler1}/> <br /><br />
        <button className='btn btn-success' onClick={txtHandler} >Click Me</button>
        </>
    )
}
export default Event;
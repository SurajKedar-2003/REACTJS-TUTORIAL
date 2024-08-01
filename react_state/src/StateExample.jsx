import React, {useState} from 'react'

function StateExample() {
    const [txt, setText] = useState('john')
    function txtHandler(){
        setText('blake')
    }
  return (
    <>
    <h1>state example</h1>
    <button className='btn btn-primary' onClick={txtHandler}>Click Me</button>
    {txt}
    <br /><br />
    </>
  )
}

export default StateExample
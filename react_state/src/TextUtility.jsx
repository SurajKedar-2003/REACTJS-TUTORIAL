import React, {useState} from 'react'

function TextUtility() {
    const [txt, setText] = useState('');
    
    function uppercase(){
       setText(txt.toUpperCase())
    }
    function handleLowercase(){
      setText(txt.toLowerCase())
    }
    function handleSpaces(){
      const trimText = txt.replace(/\s+/g, '').trim()
      setText(trimText)
    }
    function handleClear(){
      setText("")
    }
  return (
   <>
        <div className='bg-dark text-light p-3 w-50 m-auto'>
          <h1>Text Utility app</h1>
        <input type="text" name='t1' id='t1' placeholder='enter a text' value={txt} onChange={(e)=>setText(e.target.value)} className='p-2 w-50 m-2'/>
        <br />
        <br />
        <button className='btn btn-primary m-2' onClick={uppercase}>Uppercase</button>
        <button className='btn btn-success m-2' onClick={handleLowercase}>Lowercase</button>
        <button className='btn btn-danger m-2' onClick={handleClear}>clear</button>
        <button className='btn btn-warning m-2 ' onClick={handleSpaces}>Remove Spaces</button>
        </div>
        
        
   </>
  )
}

export default TextUtility
import React from 'react'
import User from './User'
import Guest from './Guest'
function Greet(props) {
    
    <div>Greet Component</div>
    if(props.status === true)
    {
        return(
            <User></User>
        )
    }else{
        return(
            <Guest></Guest>
        )
    }
}

export default Greet;
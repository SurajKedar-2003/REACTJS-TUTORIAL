import React from 'react';
import B from './B'
class A extends React.Component{
    render(){
        return(
            <><h4>This is Component A</h4>
            <B></B>
            </>
        )
    }
}

export default A;
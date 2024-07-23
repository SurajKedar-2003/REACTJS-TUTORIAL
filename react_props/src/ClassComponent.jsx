import React from "react";

class ClassComponent extends React.Component{
    render(){
        return(
            <>
            <h2>This is Class Component</h2>
            <p> Id :{this.props.id}</p>
            <p>Name:{this.props.name}</p>
            </>
        )
    }
}
export default ClassComponent;
import React from "react";

class PropClassExample extends React.Component{
    render(){
        return(
            <>
            <h1>Class Component</h1>
            <p>{this.props.id}</p>
            <p>{this.props.name}</p>
            <p>{this.props.city}</p>
            <p>{this.props.age}</p>
            </>
        )
    }
}

export default PropClassExample;
import React from "react";

function Propsexample(props){
    return(
        <>
        <p>Student id:{props.id}</p>
        <p>Name:{props.name}</p>
        <p>city:{props.city}</p>
        <p>age :{props.age}</p>
        {/* how to pass object as argument */}

        <p>Student id:{props.info.id}</p>
        </>
    )
}
export default Propsexample;
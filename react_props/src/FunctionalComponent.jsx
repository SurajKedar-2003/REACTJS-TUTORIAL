import React from 'react'

function FunctionalComponent(props) {
  return (
    <>
    <h2>This is functional Component</h2>
    <p>first name :{props.fname}</p>
    <p>last name :{props.lname}</p>
    </>
  )
}

export default FunctionalComponent
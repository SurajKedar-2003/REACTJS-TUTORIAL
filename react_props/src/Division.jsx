import React from 'react'

function Division(props) {
  return (
    <>
    <h3>Num1 :{props.num1}</h3>
    <h3>Num2 :{props.num2}</h3>
    <h3>Division:{parseInt(props.num1)/parseInt(props.num2)}</h3>
</>
  )
}

export default Division
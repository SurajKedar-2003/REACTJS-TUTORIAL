import React from 'react'

function Addition(props) {
  return (
   <>
        <h3>Num1 :{props.num1}</h3>
        <h3>Num2 :{props.num2}</h3>
        <h3>Addition:{parseInt(props.num1)+parseInt(props.num2)}</h3>
   </>
  )
}

export default Addition
import React from 'react'

function EmployeeObjectRender() {
    const employee = [
        {
            id:101,
            name:'suraj',
            country:'india'
        },
        {
            id:102,
            name:'kedar',
            country:'UK'
        },
        {
            id:103,
            name:'Amit',
            country:'USA'
        },
        {
            id:104,
            name:'omkar',
            country:'India'
        },
        {
            id:105,
            name:'Ravi',
            country:'USA'
        },
    ];
  return (
    <>
    <ul>
        {
            employee.map((e)=>{
                return(
                    <li>{e.id} {e.name} {e.country}</li>
                )
                
            })
        }
    </ul>
    </>
  )
}

export default EmployeeObjectRender
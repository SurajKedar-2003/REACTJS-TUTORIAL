import React from 'react';

function EmployeeArrayTable(){

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

    return(
        <><><table>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Country</th>
                </tr>
                {
                    employee.map((e)=>{
                        return(
                            <>
                                <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.country}</td>
                                </tr>
                            </>
                        )
                    })
                            
                }
                       
            </table></>
        
        </>
    )
}
export default EmployeeArrayTable;
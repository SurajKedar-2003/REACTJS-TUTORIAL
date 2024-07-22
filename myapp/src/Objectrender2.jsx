import React from 'react'

function Objectrender2(){
    const student = [
        {
            rollno:1, name:'martin', m1:80, m2:93, m3:81, city:'mumbai'
        },
        {
            rollno:2, name:'donald', m1:86, m2:23, m3:31, city:'pune'
        },
        {
            rollno:3, name:'peter', m1:80, m2:93, m3:81, city:'mumbai'
        },
        {
            rollno:4, name:'john', m1:80, m2:93, m3:81, city:'delhi'
        },
        {
            rollno:5, name:'blake', m1:82, m2:53, m3:61, city:'nagar'
        },
    ]
    return(
        <>
        <table border={1} cellPadding={5}>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>M1</th>
                <th>M2</th>
                <th>M3</th>
                <th>City</th>
                <th>Total</th>
            </tr>

            {
                student.map((e)=>{
                    return(
                        <tr>
                            <td>{e.rollno}</td>
                            <td>{e.name}</td>
                            <td>{e.m1}</td>
                            <td>{e.m2}</td>
                            <td>{e.m3}</td>
                            <td>{e.city}</td>
                            <td>{e.m1+e.m2+e.m3}</td>
                        </tr>
                    )
                })
            }
        </table>
        
        </>
    )
}

export default Objectrender2;
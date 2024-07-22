import React from 'react'

function Objectrender(){
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
        <ul>
            {
                student.map((e)=>{
                    return(
                        <li>{e.rollno} {e.m1}, {e.m2} {e.m3} {e.city}</li>
                    )
                })
            }
        </ul>
        </>
    )
}
export default Objectrender;
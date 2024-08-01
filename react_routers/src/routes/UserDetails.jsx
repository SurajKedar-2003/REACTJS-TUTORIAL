import React from 'react'
import { useParams } from 'react-router'

function UserDetails() {
    const {id} = useParams();
    const userInfo = [
        {
            userId:101,
            userName:'john',
            role: 'developer',
            city:'pune'
        },
        {
            userId:102,
            userName:'maxwell',
            role: 'HR',
            city:'nagpur'
        },
        {
            userId:103,
            userName:'martin',
            role: 'accountant',
            city:'delhi'
        },
        {
            userId:104,
            userName:'blake',
            role: 'manager',
            city:'mumbai'
        }
    ]
    
  return (
    <>

        <h1>This is user details Component</h1>
        <table className="table table-bordered w-50 p-3 bg-info text-white display-8" align="center">
                <tr>
                    <th>UserId</th>
                    <th>Username</th>
                    <th>role</th>
                    <th>City</th>
                </tr>
            {
                userInfo.map((e)=>{
                    if(e.userId==id){
                        return(
                            <>
                                <tr>
                                    <td>{e.userId}</td>
                                    <td>{e.userName}</td>
                                    <td>{e.role}</td>
                                    <td>{e.city}</td>
                                </tr>
                            </>
                        )
                    }
                    if(e.userName===id){
                        return(
                            <>
                                <tr>
                                    <td>{e.userId}</td>
                                    <td>{e.userName}</td>
                                    <td>{e.role}</td>
                                    <td>{e.city}</td>
                                </tr>
                            </>
                        )
                    }
                    if(e.role===id){
                        return(
                            <>
                                <tr>
                                    <td>{e.userId}</td>
                                    <td>{e.userName}</td>
                                    <td>{e.role}</td>
                                    <td>{e.city}</td>
                                </tr>
                            </>
                        )
                    }
                    if(e.city===id){
                        return(
                            <>
                                <tr>
                                    <td>{e.userId}</td>
                                    <td>{e.userName}</td>
                                    <td>{e.role}</td>
                                    <td>{e.city}</td>
                                </tr>
                            </>
                        )
                    }
                    
                })
            }
        </table>
    </>
  )
}

export default UserDetails
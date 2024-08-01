import React, { useState } from "react";
import {useParams} from 'react-router-dom'

function User(){
  
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
            city:'Nagpur'
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
            city:'numbai'
        }
    ]
    // const {id} = useParams();
    return(
        <>
            {/* <h1>User Component : {id}</h1> */}
            <h1>User Information :</h1>
            <table className="table table-bordered w-50 p-3 bg-info text-white display-8" align="center">
                <tr>
                    <th>UserId</th>
                    <th>Username</th>
                    <th>role</th>
                    <th>City</th>
                </tr>
            {
                userInfo.map((e)=>{
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
                })
            }
            </table>

           
        </>
    )
}

export default User;
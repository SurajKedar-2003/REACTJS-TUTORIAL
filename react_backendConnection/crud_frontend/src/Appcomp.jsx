import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
function Appcomp() {
    const [post, setPost] = useState([]);
    const navigate = useNavigate();
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/list').then((response)=>{
    //         console.log(response);
    //         setPost(response.data)
            
    //     })
    // })
    const url = 'http://localhost:3000';
    const fetchPost = async()=>{
        const res = await axios.get(`${url}/list`);
        setPost(res.data);
    }
    useEffect(()=>{
        fetchPost();
    }, [])


    const deleteHandler = async (stud)=>{
        setPost(post.filter((p)=>p._id!==stud._id))
        await axios.delete(`${url}/delete/${stud._id}`)
    }
    const handleUpdate = async (stud)=>{
        navigate(`/update/${stud._id}`)
    }


  return (
    <>
        <table className='table table-bordered w-75 p-5 display-16'>
            <tr className='text-center'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>

            {
            post.map((e)=>{
                return(
                    <>
                        <tr>
                            <th>{e.fname}</th>
                            <th>{e.lname}</th>
                            <th>{e.email}</th>
                            <th>{e.password}</th>
                            <th><button className='btn btn-primary m-2' onClick={()=>handleUpdate(e)}>Edit</button></th>
                            <th><button className='btn btn-danger m-2 ' onClick={()=>deleteHandler(e)}>Delete</button></th>
                        </tr>
                    </>
                )
            })
        }
            
        </table>
        <Link to="/AddStudent">Add new Student</Link>
        
    </>
  )
}

export default Appcomp
import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
const MainComponent = ()=>{
    const apiUrl = "http://localhost:4000"
    const [post, setPost] = useState([]);
    const Navigate = useNavigate();
    
    const fetchPost = async()=>{
        let res = await axios.get(`${apiUrl}/list`);
        setPost(res.data);
    }

    useEffect(()=>{
        fetchPost();
    },[])
    
    const updateHandler = (book)=>{
        Navigate(`/EditbookInfo/${book._id}`);
    }

    return(
        <>
            <div className="fs-1 mx-5">Book Admin</div>
            <table className='table table-bordered  m-5 w-75 p-5 display-16' >
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>price</th>
                    <th>Tags</th>
                </tr>

                {
                    post.map((e)=>{
                        return(
                            <>
                            <tr>
                                <td>{e.title}</td>
                                <td>{e.author}</td>
                                <td>{e.description}</td>
                                <td>{e.price}</td>
                                <td>{e.tags}</td>
                                <td><button className="btn btn-primary" onClick={()=>updateHandler(e)}>Edit</button></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                            </>
                        )
                    })
                }
                
            </table>

            <Link to="/Addbook"><button className="btn btn-warning mx-5">Add new Book</button></Link>
        </>
    )

}

export default MainComponent;
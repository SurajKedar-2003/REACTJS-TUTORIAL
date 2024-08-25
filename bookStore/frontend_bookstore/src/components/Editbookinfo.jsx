import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditbookInfo = ()=>{
    const apiUrl = 'http://localhost:4000/list';
    const {id} = useParams();
    const Navigate = useNavigate();
    const [book, setBook] = useState({
        title:"",
        author:"",
        description:"",
        price:"",
        tags:[]
    })
    const fetchPost = async()=>{
        let res = await axios.get(`${apiUrl}/${id}`);
        setBook(res.data);

    }
    useEffect(()=>{
        fetchPost();
    },[])
    const textHandler = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setBook({...book, [name]:value});
    }
    const updateHandler = async(e)=>{
        e.preventDefault();
        await axios.put(`${apiUrl}/${id}`, book)
        return Navigate('/')
    }
    return(
        <>
            <div className="container border p-4">
                <h1 className="my-2">Update Book</h1>
                <form className="d-flex flex-column gap-3 p-4" onSubmit={()=>updateHandler()}>
                    <input type="text" name="title" value={book.title} placeholder="Enter title" className="p-2" onChange={textHandler} />
                    <input type="text" name="author" value={book.author} placeholder="Enter author" className="p-2" onChange={textHandler}/>
                    <textarea rows="4" cols="50" name="description" value={book.description} placeholder="enter description" className="p-2" onChange={textHandler}/>
                    <input type="number" name="price" value={book.price} placeholder="enter price" className="p-2" onChange={textHandler}/>
                    <textarea cols="50" rows="2" name="tags" value={book.tags} placeholder="enter tags"className="p-2" onChange={textHandler}/>
                    <button className="btn btn-success">Update Book</button>
                </form>
            </div>
            
        </>
    )

}

export default EditbookInfo;
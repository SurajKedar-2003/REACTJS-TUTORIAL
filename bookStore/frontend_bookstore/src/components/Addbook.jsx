import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Addbook = ()=>{
    const [book, setBook] = useState({
        title:"",
        author:"",
        description:"",
        price:"",
        tags:[]
    })
    const Navigate = useNavigate();
    
    function textHandler(e){
        let name = e.target.name;
        let value = e.target.value;
        console.log('name', name);
        console.log('value', value);
        setBook({...book, [name]: value})
       
    }
    function submitHandler(e){
        e.preventDefault();
        console.log(book);
        setBook(book);
        axios.post('http://localhost:4000/create', book);
        Navigate('/') 
    }
    return(
        <>
            <div className="container border p-4">
                <h1 className="my-2">Add New Book</h1>
                <form className="d-flex flex-column gap-3 p-4" onSubmit={submitHandler}>
                    <input type="text" name="title" placeholder="Enter title" className="p-2" onChange={textHandler} />
                    <input type="text" name="author" placeholder="Enter author" className="p-2" onChange={textHandler}/>
                    <textarea rows="4" cols="50" name="description" placeholder="enter description" className="p-2" onChange={textHandler}/>
                    <input type="number" name="price" placeholder="enter price" className="p-2" onChange={textHandler}/>
                    <textarea cols="50" rows="2" name="tags" placeholder="enter tags"className="p-2" onChange={textHandler}/>
                    <button className="btn btn-success">Add Book</button>
                </form>
            </div>
        </>
    )
}

export default Addbook;
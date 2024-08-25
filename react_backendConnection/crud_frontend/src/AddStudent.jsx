import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddStudent() {
    const navigate = useNavigate();
    const [txt, setTxt] = useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    })
    function txtHandler(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        console.log(value);
        setTxt({...txt, [name]:value})

        
        
    }
    function submitHandler(e){
        e.preventDefault();
        console.log(txt);
        axios.post('http://localhost:3000/create', txt);
        navigate('/');
        
    }
  return (
    <>
        <div className=''>
            <form onSubmit={submitHandler}>
                <input type="text" name='fname' placeholder='Enter first name' onChange={txtHandler}/>
                <input type="text" name='lname' placeholder='Enter last name' onChange={txtHandler}/>
                <input type="text" name='email' placeholder='Enter Email' onChange={txtHandler}/>
                <input type="text" name='password' placeholder='Enter Password' onChange={txtHandler} />
                <input type="submit" className='btn btn-success' />
            </form>
        </div>
    </>
  )
}

export default AddStudent
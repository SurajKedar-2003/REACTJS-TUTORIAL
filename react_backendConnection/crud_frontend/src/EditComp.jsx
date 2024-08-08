import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditComp() {
    const apiUrl = 'http://localhost:3000/list';
    const {id} = useParams();
    const navigate = useNavigate();
    const [txt, setTxt] = useState({
        "fname":"",
        "lname":""
    })

    const fetchPost = async()=>{
        const res = await axios.get(`${apiUrl}/${id}`)
        setTxt(res.data)
    }

   useEffect(()=>{
    fetchPost();
   },[])
    function txtHandler(e){
        let name = e.target.name;
        let value = e.target.value;
        setTxt({...txt, [name]:value})
    }

   const updateHandler = async (e)=>{
        e.preventDefault();
        await axios.put(`${apiUrl}/${id}`, txt)
        return navigate('/')
   }

  return (
    <>
         <div >
            <form onSubmit={updateHandler} className='container w-75'>
                <input type="text" name='fname' value={txt.fname} placeholder='Enter first name' onChange={txtHandler} className='mx-4 my-2 px-4 py-2 fs-5'/><br />
                <input type="text" name='lname' value={txt.lname} placeholder='Enter last name' onChange={txtHandler} className='mx-4 my-2 px-4 py-2 fs-5'/><br />
                <input type="text" name='email' value={txt.email} disabled placeholder='Enter Email' onChange={txtHandler} className='mx-4 my-2 px-4 py-2 fs-5'/><br />
                <input type="text" name='password' value={txt.password} disabled placeholder='Enter Password' onChange={txtHandler} className='mx-4 my-2 px-4 py-2 fs-5' /><br />
                <input type="submit" className='btn btn-success mx-4 my-2' />
            </form>
        </div>
    </>
  )
}

export default EditComp
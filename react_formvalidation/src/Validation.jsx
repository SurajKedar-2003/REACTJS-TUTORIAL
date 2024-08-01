import React, { useState } from 'react'

function Validation() {
    const [err, seterr] = useState();
    function userHandler(event){
        let len = event.target.value.length;
        console.log(len);
        if(len>=5){
            seterr(true)
        }else{
            seterr(false)
        }
    }
  return (
    <>
        <div className='w-25 m-auto mt-5'>
            <h1>Form Validation</h1>
         <form>
         <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="exampleInputUname" placeholder="Enter Username" onChange={userHandler} />
            {
                err?"":<span style={{color:'red'}}>Invalid User Name</span>
            }
        </div>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
    </>
  )
}

export default Validation
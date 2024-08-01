import React from 'react'

function LoginPage() {
    let uname, pass;
    function username(event){
        uname = event.target.value;
    }
    function password(event){
        pass = event.target.value;
    }
    function display(){
        console.log("username:", uname);
        console.log("password:", pass);
    }
  return (
    <>
       
            <h1>Login Page</h1>
            <div>Username : <input type="text" name='uname' id='uname' placeholder='Enter Username' onChange={username}/></div><br />
            <div>Password : <input type="text" name='pass' id='pass' placeholder='Enter Password' onChange={password}/></div><br />
            <button className='btn btn-primary m-2' onClick={display}>Add</button>
    
    </>
  )
}

export default LoginPage
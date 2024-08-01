import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function Navbar() {
  const [txt, setTxt] = useState()
  const navigate = useNavigate();
  function handleClick(){
    navigate(`/user/${txt}`)
  }
  return (
    <>
       <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link"><Link to='/'>Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to ="/about">About</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to='/contact'>Contact</Link></a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" onChange={(e)=>setTxt(e.target.value)}/>
        <button className="btn btn-primary" type="button" onClick={handleClick}>Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
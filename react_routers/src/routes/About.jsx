import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {
    const navigate = useNavigate();
    function fun(){
        navigate('/Blog');
    }
  return (
    <>
        <h1>This is About Components</h1>
        <input type="button" value={'Blog button'} onClick={fun} />
    </>
  )
}

export default About
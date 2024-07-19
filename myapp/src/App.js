import React from 'react';
import Header from './Header'
import Home from './Home'
import Clock from './Clock'
import Arrayrender from './Arrayrender'

/* export default*/function App(){
    return(
        <>
        {/**
        <Header></Header>
        
        <h1>This is functional component</h1>
        <Home></Home>
        <h1>This is class Component</h1> */}
        <Clock></Clock>
        <Arrayrender></Arrayrender>
        
        </>
    )
}

export default App; // also we can add export default before the function declaration
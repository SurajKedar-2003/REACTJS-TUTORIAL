import React from 'react';
import Header from './Header'
import Home from './Home'
import Clock from './Clock'
import Arrayrender from './Arrayrender'
import Objectrender from './Objectrender';
import Objectrender2 from './Objectrender2';

/* export default*/function App(){
    return(
        <>
        
        <Header></Header>
        
        <h1>This is functional component</h1>
        <Home></Home>
        <h1>This is class Component</h1>
        <Clock></Clock>
        <Arrayrender></Arrayrender>
        <Objectrender></Objectrender>
        <Objectrender2></Objectrender2>
        
        </>

        
    )
}

export default App; // also we can add export default before the function declaration
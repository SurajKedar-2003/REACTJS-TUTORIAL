import React from 'react';
import Header from './Header'
import Home from './Home'

/* export default*/function App(){
    return(
        <>
        <Header></Header>
        
        <h1>This is functional component</h1>
        <Home></Home>
        <h1>This is class Component</h1>
        </>
    )
}

export default App; // also we can add export default before the function declaration
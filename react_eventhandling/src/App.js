import React from 'react'
import Event from './Event'
import Addition from './Addition';
import MergeText from './MergeText';
import Operation from './Operation'
import LoginPage from './LoginPage';
function App(){
    return(
        <>
        <Event></Event>
        <Addition></Addition>
        <MergeText></MergeText> <hr></hr><hr></hr>
        <Operation></Operation><hr></hr>
        <LoginPage></LoginPage>
        </>
    )
}

export default App;
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Apicall from './Apicall'
import NavbarApi from './routes/NavbarApi'
import Post from './routes/Posts'
import Comment from './routes/Comment'
import Photos from './routes/Photos'

function App() {
  return (
    <>
    {/* <Apicall></Apicall> */}
    <BrowserRouter>
      <NavbarApi></NavbarApi>
      <Routes>
        <Route path='/post' element={<Post></Post>}></Route>
        <Route path='/Comment' element={<Comment></Comment>}></Route>
        <Route path='/Photos' element={<Photos></Photos>}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
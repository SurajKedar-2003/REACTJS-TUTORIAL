import React from "react";
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Help from './routes/Help'
import User from "./routes/User";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageNotfound from './routes/PageNotfound'
import Blog from "./routes/Blog";
import Clock from "./routes/Clock";
import Calculator from "./routes/Calculator";
import Navbar from "./routes/Navbar";
function App() {
  return (
    <>
   
      <BrowserRouter>
      <Navbar></Navbar>
      {/* <Link to ="/">Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/contact">Contact</Link>
      <Link to ="/Help">Help</Link>
      <Link to = "/clock">Clock</Link>
      <Link to = "/Calculator">Calculator</Link> */}


      <Routes>
       <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/help" element={<Help></Help>}></Route>
        <Route path="*" element={<PageNotfound></PageNotfound>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/user" element={<User></User>}></Route>
          {/*
        <Route path="/user/:id" element={<User></User>}></Route>
        
        <Route path="/clock" element= {<Clock></Clock>}></Route>
        <Route path="/calculator" element={<Calculator></Calculator>}></Route> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

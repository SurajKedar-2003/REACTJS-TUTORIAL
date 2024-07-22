import React from 'react'
import PropClassExample from './PropClassExample';
import Propsexample from './Propsexample'
import Greet from './Greet'
function App(){
  return(
    <>
      <h1>This is app component</h1>

      {/* about the props in functional component */}
      <Propsexample info = {{id:"201",name:'scoot', city:'delhi', age:'56'}}></Propsexample>
      <Propsexample id = "101" name='john' city='pune' age='34'></Propsexample>
      <Propsexample id = "102" name='martin' city='mumbai' age='45'></Propsexample> 

      <PropClassExample id = "102" name='martin' city='mumbai' age='45' ></PropClassExample> 
          
      <Greet status ={true}></Greet>
    </>
  )
}
export default App;
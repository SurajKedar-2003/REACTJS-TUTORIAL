import React from 'react'
//import PropClassExample from './PropClassExample';
//import Propsexample from './Propsexample'
import Greet from './Greet'
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';
import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent';
import Food from './Food';

function App(){
  const foodItems = ["idli", 'dosa', 'pattice', 'sandwich'];
  return(
    <>
      <h1>This is app component</h1>
      <ul>
        {
          foodItems.map((e)=> <Food val = {e}></Food>)
        }
      </ul>
      {/* about the props in functional component */}
      {/* <Propsexample info = {{id:"201",name:'scoot', city:'delhi', age:'56'}}></Propsexample>
      <Propsexample id = "101" name='john' city='pune' age='34'></Propsexample>
      <Propsexample id = "102" name='martin' city='mumbai' age='45'></Propsexample> 

      <PropClassExample id = "102" name='martin' city='mumbai' age='45' ></PropClassExample>  */}
          
      <Greet status ={true}></Greet>
      <Addition num1="20" num2="30"></Addition>
      <Subtraction num1="50" num2="30"></Subtraction>
      <Multiplication num1="50" num2="30"></Multiplication>
      <Division num1="50" num2="30"></Division>

      <FunctionalComponent fname = "suraj" lname = "kedar"></FunctionalComponent>
      <ClassComponent id="320" name="martin"></ClassComponent>
    </>
  )
}
export default App;
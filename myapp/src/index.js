import React from 'react';
import Reactdom from 'react-dom';
import App from './App'
import './index.css'
var name = 'SURAJ';
var age = 22;
var d = new Date().toLocaleDateString();
var t = new Date().toLocaleTimeString();

//render take two parameter "what to display", "where to display(we have to provide the class or id)"
//render return only one response, multiple parameters can not send.
Reactdom.render(<div><h1>this is index page</h1>
                <p>This is paragraph</p>
                <h2>Student name: {name}</h2>
                <h2>Student age: {age}</h2>
                <h2>Student date: {d}</h2>
                <h2>Student time: {t}</h2>
                </div>, document.getElementById('root'));


Reactdom.render(<App></App>, document.getElementById('root'));
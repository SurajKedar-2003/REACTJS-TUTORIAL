import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer'
import Student from './Student'
import Employee from './Employee'
import Day from './Day'
import City from './City'
import A from './A'
import EmployeeArrayTable from './EmployeeArrayTable';
import EmployeeObjectRender from './EmployeeObjectRender';
function App(){
    return(
        <>
        <Header></Header>
        <Body></Body>
        <Student></Student>
        <Employee></Employee>
        <Day></Day>
        <City></City>
        <A></A>
        <EmployeeArrayTable></EmployeeArrayTable>
        <EmployeeObjectRender></EmployeeObjectRender>
        <Footer></Footer>
        </>
    )
}
export default App;

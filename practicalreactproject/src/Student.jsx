import React from 'react';

let student = {
    rollno:101,
    name:"surajkedar",
    marks:95
}
function Student(){
    return(
        <>
            <h2 style={{'color':'blue', 'fontSize':'30px'}} >Student Information:</h2>
            <h3>Student rollNo: {student.rollno}</h3>
            <h3>Student Name: {student.name}</h3>
            <h3>Student Marks: {student.marks}</h3>
        </>
    )
}
export default Student;
import React from 'react';

class Employee extends React.Component{
    employee = {
        id: 103,
        name: 'suraj kedar',
        salary: 40000
    }

    render(){
        return(
            <>
                <h2 style={{'color':'blue', 'fontSize':'30px'}} >Employee Information:</h2>
                <h3>Employee Id: {this.employee.id}</h3>
                <h3>Employee name: {this.employee.name}</h3>
                <h3>Employee salary: {this.employee.salary}</h3>

            </>
        )
    }
}

export default Employee;
import React from "react";


//set up table that lists employees
function EmployeeList(props) {
    return (
    <div>
        <table className="table">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Country</th>
                <th>Phone</th>
                <th>Cell</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            { props.employees.map((employee, index => { 
                return (
                <tr key={index}>
                    <td>{employee.name.first}</td> 
                    <td>{employee.name.last}</td>
                    <td>{employee.country}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.cell}</td>
                    <td>{employee.email}</td>
                </tr>
                )
            }))
            }
        </tbody>
        </table> 
    </div>
    );
}

export default EmployeeList;
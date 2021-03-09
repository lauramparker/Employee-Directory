import React from "react";



function EmployeeList (props) {
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
            { props.employees.map(employee => ( 
                <tr>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.country}</td>
                    <td>{props.phone}</td>
                    <td>{props.cell}</td>
                    <td>{props.email}</td>
                </tr>
                ))}
        </tbody>
        </table> 
    </div>
    );
}

export default EmployeeList;
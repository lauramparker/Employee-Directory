import React, { Component } from "react";
import API from "../utils/API";

class List extends Component {

    state = {
        employees: getEmployees()
    };

    render() {
        return <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Phone</th>
                    <th>Cell</th>
                    <th>Email</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                { this.state.employees.map(employee => (
                    <tr>
                        <td>{employee.name}</td>
                        <td>{employee.title}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.cell}</td>
                        <td>{employee.email}</td>
                        <td>{employee.location}</td>
                    </tr>
                    ) 
                    )}
            </tbody>
        </table>
        );
    }
}

export default List;
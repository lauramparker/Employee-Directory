import React, { Component } from "react";
import API from "../utils/API";

class List extends Component {

//this component should have the data passed down via props. 
//the data needs to be manipulated in Filter


    render() {
        return <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Cell</th>
                    <th>Email</th>
    
                </tr>
            </thead>
            <tbody>
                { this.state.employees.map(employee => (  //prop.employees.map OR move this to Filter
                    <tr>
                        <td>{employee.name}</td>
                        <td>{employee.country}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.cell}</td>
                        <td>{employee.email}</td>
                    </tr>
                    ) 
                    )}
            </tbody>
        </table>
        );
    }
}

export default List;
import React, { Component } from 'react';
import EmployeeList from "./EmployeeList";
import FilterName from "./FilterName";
import Container from "./Container";
import API from "../utils/API";

class Filter extends Component {
    state = {  
        employees: [],
        filterResults: [], //results of the filter
        // results: {},  //holding for all results from API
        
        didFilter: true,
        filterNameValue: "" //value of filter term for Name search
        
    };


    //When the component mounts, request the data from Random User in Utils/API, 
    //store API res in state results{}
    componentDidMount() {
      API.getEmployeesList()
        .then(res => this.setState({ employees: res.data.results, filterResults: res.data.results })) 
        .catch(err => console.log(err))
        .handleEmployeeData(this.state.employees)
    };


    //map all employee data into different fields using state.employees[]
    handleEmployeeData = () => {
        this.state.employees.map(employee => ( //employees should be an array of objects
                firstName= this.state.employees.results.name.first,
                lastName= this.state.employess.results.name.last,
                country= this.state.employees.results.nat,
                phone= this.state.employees.results.phone,
                cell= this.state.employees.results.cell,
                email= this.state.employees.results.email
        )) 
    };

    {props.list.map(user => (
        <tr key={user.login.uuid}>
            <td className="align-middle text-center">
                <img src={user.picture.medium} className="rounded-circle" alt="Employee Profile" />
            </td>
            <td className="align-middle">{user.name.first} {user.name.last}</td>
            <td className="align-middle">{user.location.state}</td>
            <td className="align-middle">{user.phone}</td>
            <td className="align-middle">{user.email}</td>
        </tr>
    ))}

    handleChangeName = event => {
        this.setState({ filterNameValue: event.target.value }); 
    };  


    //if the user wants to search/filter the directory, Random User API returns data set per the filter
    handleNameSubmit = event => {
        event.preventDefault();
        API.filterEmployeeName(this.state.filterNameValue)
    };
  


    render() { 
        return ( 
            <Container>

                <EmployeeList />

            </Container>
           
           
        ); //end return

    }
}

 
export default Filter;
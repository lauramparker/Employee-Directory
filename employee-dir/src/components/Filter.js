import React, { Component } from 'react';
import EmployeeList from "./EmployeeList";
import FilterName from "./FilterName";
import Container from "./Container";
import Row from "./Row";
import API from "../utils/API";

class Filter extends Component {
    state = {  
        employees: [],
        filterResults: [], //results of the filter
        didFilter: true,
        filterNameValue: "" //value of filter term for Name search
    };


    //When the component mounts, request the data from Random User in Utils/API, 
    componentDidMount() {
        this.getEmployeesList()
    };
    
    
    getEmployeesList = () => {
        API.getUsers()
        .then(({ data }) => {
            const employees = data.results.map(employee => {
                return {
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    country: employee.nat,
                    phone: employee.phone,
                    cell: employee.cell,
                    email: employee.email,
                }
            });
            this.setState({
                employees: [...employees],
                filterResults: [...employees]  //sets both state arrays (employees & filterResults equal to same original API call
            })
        })//should add sort function callback here
        .catch(err => console.error(err));
    };


    handleChangeName = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
   

    //if the user wants to search/filter the directory, Random User API returns data set per the filter
    // handleNameSubmit = event => {
    //     event.preventDefault();
    //     this.setState({ employees: res.data.results })
    // };

    filterResults  = () => {
        const evaluate = (this.state.employees).filter((employee) =>
            ((employee.name.first) + " " + (employee.name.last))
            .includes(this.state.filterNameValue));
        this.setState({ filterResults: evaluate})
    };
  

    render() { 
        return ( 
            <Container>
                <h1>Employee Directory</h1>
                <Row>
                    <EmployeeList 
                        employees={this.state.employees}
                    />
                    <FilterName
                        value={this.state.filterNameValue}
                        onChange={this.handleChangeName}
                        handleChangeName={this.handleChangeName}
                        filterResults={this.filterResults}
                    />
                </Row>
            </Container>
        ); 
    }
}
 
export default Filter;
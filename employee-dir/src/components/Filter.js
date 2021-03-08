import React, { Component } from 'react';
import Card from "./Card";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeList from "./EmployeeList";
import FilterName from "./FilterName";
import FilterNats from "./FilterNats";
import Container from "./Container";
import API from "../utils/API";

class Filter extends Component {
    state = {  
        employees: [],
        filterResults: [], //results of the filter
        results: {},  //holding for all results from API
        
        didFilter: true,
        filterNatsValue: "",   //value of filter term for Nationality search
        filterNameValue: "" //value of filter term for Name search
        
    };


    //When the component mounts, request the data from Random User in Utils/API, 
    //store API res in state results{}
    componentDidMount() {
      API.getEmployees()
        .then(res => this.setState({ results: res.data })) 
        .catch(err => console.log(err))
        .handleEmployeeData(state.results)
    };

    //map all employee data into different fields using state.results{}
    handleEmployeeData = ({state.results}) => {
        state.results.map(employees => { //employees should be an array of objects
            return {
                firstName: results.results.name.first,
                lastName: results.results.name.last,
                name: results.results.name.first.concat(" ", employee.name.last),
                phone: results.results.phone,
                cell: results.results.cell,
                email: results.results.email,
                // location: results.results.location,
                country: results.results.nat
            };
        });
    };

    
    // //find result of filtered data
    // handleFilter = (event) => {
    //     // onClick(event) {  //onclick of name search button - add to rendering below...
    //     if (event) {
    //         return{
         
    //     this.state.employees.filter(name => name.includes(this.state.filterNameValue));
    //         .map(filterResults => (
    //             {filterResults}
    //         )}
    //     }
    // };




    handleChangeName = event => {
        this.setState({ filterNameValue: event.target.value }); 
    };  

    handleChangeNats = event => {
        this.setState({ filterNatsValue: event.target.value }); 
    }; 

    //if the user wants to search/filter the directory, Random User API returns data set per the filter
    handleNameSubmit = event => {
        event.preventDefault();
        API.filterEmployeeName(this.state.filterNameValue)
    };

    handleNatsSubmit = event => {
        event.preventDefault();
        API.filterEmployeeNats(this.state.filterNatsValue)
    };

  


    render() { 
        return (  
            <div>
                <EmployeeList />
            </div>
        ); //end return

    }
}

{/* <div>
<FilterNats>
        Search by Country
</FilterNats>
        
<FilterName>
        Enter Name Search
</FilterName>
</div> */}
 
export default Filter;
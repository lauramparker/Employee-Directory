import React, { Component } from 'react';
import Card from "./Card";
import EmployeeInfo from "./EmployeeInfo";
import FilterName from "./FilterName";
import FilterNats from "./FilterNats";
import Container from "./Container";
import API from "../utils/API";

class Filter extends Component {
    state = {  
        employees: {},
        result: {},
        didFilter: true,
        filterNatsValue: "",   //value of filter term
        filterNameValue: "",
    };


    //When the component mounts, request the data from Random User in Utils/API
    componentDidMount() {
      API.getEmployees(); 
        .then(res => this.setState({ employees: res.data }))
        .catch(err => console.log(err));
    }

    handleChangeName = event => {
        this.setState({ filterNameValue: event.target.value }); //check???
    };  

    handleChangeNats = event => {
        this.setState({ filterNatsValue: event.target.value }); //check???
    }; 

    //if the user wants to search/filter the directory, Random User API returns data set per the filter
    handleNameSubmit = event => {
        event.preventDefault();
        API.filterEmployeeList(this.state.filterNameValue)
    };

    handleNatsSubmit = event => {
        event.preventDefault();
        API.filterEmployeeList(this.state.filterNatsValue)
    };


    render() { 
        return (  
            <div>
                <Container>
                    <Card>
                        <EmployeeInfo>

                        </EmployeeInfo>
                    </Card>
                    
                    <Filter>
                        <FilterNats>
                        Search by Country
                        </FilterNats>
                        
                        <FilterName>
                        Enter Name Search
                        </FilterName>
                    </Filter>
                </Container>

            </div>

        ); //end return

    }
}
 
export default Filter;
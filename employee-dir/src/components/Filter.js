import React, { Component } from 'react';
import Card from "./Card";
import EmployeeInfo from "./EmployeeInfo";
import FilterForm from "./FilterForm"
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


    handleInputChange = event => {
        this.setState({ filter: event.target.value }); //check???
    };  

    //if the user wants to search/filter the directory, Random User API returns data set per the filter
    handleSubmit = event => {
        event.preventDefault();
        API.filterEmployeeList(this.state.filter)
    };




    render() { 
        return (  
            <div>

                <Filter>
                    <Card>
                        <EmployeeInfo></EmployeeInfo>
                        <FilterForm>
                        Search Here
                        </FilterForm>
                    </Card>
                </Filter>

            </div>

        ); //end return

    }
}
 
export default Filter;
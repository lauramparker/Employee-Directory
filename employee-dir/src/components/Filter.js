import React, { Component } from 'react';
import Card from "./Card";
import EmployeeInfo from "./EmployeeInfo";
import FilterForm from "./FilterForm"
import API from "../utils/API";

class MainContainer extends Component {
    state = {  
        employees: {},
        result: {},
        didFilter: true,
        filter: "",
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
    handleSearchSubmit = event => {
        event.preventDefault();
        API.filterEmployeeList(this.state.filter)
    };


    render() { 
        return (  
            <div>

                <MainContainer>
                    <Card>
                        <EmployeeInfo></EmployeeInfo>
                        <SearchForm>
                        Search Here
                        </SearchForm>
                    </Card>
                </MainContainer>

            </div>

        ); //end return

       //add methods for the class here: conditional? search Dir?
    //    formatCard() {
    //     return this.state.name

    //    };

    }
}
 
export default MainContainer;
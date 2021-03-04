import React, { Component } from 'react';
import MainContainer from "./MainContainer";
import Card from "./Card";
import EmployeeInfo from "./EmployeeInfo";
import SearchForm from "./SearchForm"
import API from "../utils/API";

class MainContainer extends Component {
    state = {  
        result: {},
        search: "",
        name: "",
        email: "",
        cell: "",
        phone: "",
        location: "",
    };


//When the component mounts, search for the query
    componentDidMount() {
        this.searchDirectory("Brad Gibson"); //this.bind?  or this.state.search
    }


    //send the search query to the Random User API in utils, 
    //then set the state of result equal to the response data
    searchDirectory = query => {
        API.search(query)
          .then(res => this.setState({ result: res.data.data }))
          .then(res => this.setState({ name: res.data.name }))
          .then(res => this.setState({ email: res.data.email }))
          .then(res => this.setState({ cell: res.data.cell }))
          .then(res => this.setState({ phone: res.data.phone }))
          .then(res => this.setState({ location: res.data.location }))
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    };  

    //After form is submitted, search the Random User API for the value of this.state.search
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchDirectory(this.state.search)
    };


    render() { 
        return (  
            <div>
                <span>{'Employee Search'}</span>

            </div>

            <MainContainer>
                <Card>
                    <EmployeeInfo></EmployeeInfo>
                    <SearchForm>
                    Search Here
                    </SearchForm>
                </Card>
            </MainContainer>

        ); //end return

       //add methods for the class here: conditional? search Dir?
       formatCard() {
        return this.state.name

       }

    }
}
 
export default MainContainer;
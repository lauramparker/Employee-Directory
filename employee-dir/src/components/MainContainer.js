import React, { Component } from 'react';
import MainContainer from "./MainContainer";
import Card from "./Card";
import SearchForm from "./SearchForm"
import API from "../utils/API";

class MainContainer extends Component {
    state = {  
        result: {},
        search: ""
    };


//When the component mounts, search for the query
    // componentDidMount() {
    //     this.searchDirectory("Brad Gibson"); //this.bind?  or this.state.search
    // }


    // //send the search query to the Random User API in utils, 
    // //then set the state of result equal to the response data
    // searchDirectory = query => {
    //     API.search(query)
    //       .then(res => this.setState({ result: res.data }))
    //       .catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     })
    // };  

    // //After form is submitted, search the Random User API for the value of this.state.search
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchDirectory(this.state.search)
    // };


    render() { 
        return (  
            <MainContainer>
                <Card>
                    <SearchForm>

                    </SearchForm>
                </Card>
            </MainContainer>

        );
    }
}
 
export default MainContainer;
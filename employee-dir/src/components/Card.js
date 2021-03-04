import React, { Component } from 'react';
// import MainContainer from "./MainContainer";
// import SearchForm from "./SearchForm"
// import API from "../utils/API";


class Card extends Component {
    state = {  
        // result: {},
        //see fields from Random User.. i.e.:
        name: "Tom Anderson"
        title: "Accountant"
        email: "tom@email.com"
        phone: "555-5555"

    };



//render the elements of the employee info for card
render() { 
    return (  
        <div>
            <img src={this.state.imageUrl} alt='' />
            <ul>
                <li>{this.state.name}</li>
                <li>{this.state.title}</li>
                <li>{this.state.phone}</li>
                <li>{this.state.email}</li>
            </ul>
        </div>
    )
}

}

export default Card;

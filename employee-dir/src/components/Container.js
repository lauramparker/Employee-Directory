import React from "react";
// import Filter from "./Filter";


function Container(props) { 
    return <div className={`container${props.fluid ? "-fluid" : ""}`}>
        {props.children}</div>;

}
export default Container;
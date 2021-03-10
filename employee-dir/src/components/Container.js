import React from "react";


function Container(props) { 
    return <div className={`container${props.fluid ? "-fluid" : ""}`}>     <h3>container</h3>
        {props.children}</div>;

}
export default Container;
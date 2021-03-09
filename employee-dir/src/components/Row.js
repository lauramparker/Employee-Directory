import React from "react";

//from MovieOMDB Activity
function Row(props) {
    return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Row;
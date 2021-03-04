import React from "react";

function EmployeeInfo(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h5>Name: {props.name}</h5>
      <h5>Title: {props.title}</h5>
      <h5>Phone: {props.phone}</h5>
      <h5>Email: {props.email}</h5>
    </div>
  );
}


export default EmployeeInfo;



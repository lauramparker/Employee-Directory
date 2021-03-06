import React from "react";


function FilterName(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Enter a Name to Filter Results:</label>
          <input
            onChange={props.handleChangeName}
            value={props.value} // filterNameValue = props.filterNameValue
            name="filterNameValue"
            type="text"
            className="form-control"
            placeholder="Name"
            id="filterNameValue"
          />
          <br />
          <button onClick={props.employees} className="btn btn-primary">
            See Directory
          </button>
        </div>
      </form>
    );
  }

export default FilterName;
import React from "react";


function FilterName(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Enter a Name to Filter Results:</label>
          <input
            onChange={props.handleChangeName}
            value={props.filterNameValue} // filterNameValue = props.filterNameValue
            name="search"
            type="text"
            className="form-control"
            placeholder="Name"
            id="search"
          />
          <br />
          <button onClick={props.handleNameSubmit} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    );
  }

export default FilterName;
import React from "react";



function FilterNats(props) {

    return (
      <form onSubmit={props.handleSubmit}>
        <label>
          Filter Employee Directory by Select Country
          <select value={props.state.filterNatsValue} onChange={props.handleInputChange}>

            <option value="au">Australia</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="ch">Switzerland</option>
            <option value="de">Germany</option>
            <option value="dk">Denmark</option>
            <option value="es">Spain</option>
            <option value="fi">Finland</option>
            <option value="fr">France</option>
            <option value="gb">Great Britain</option>
            <option value="ie">Ireland</option>
            <option value="ir">Iran</option>
            <option value="nl">Netherlands</option>
            <option value="nz">New Zealand</option>
            <option value="tr">Turkey</option>
            <option value="us">United States</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}


export default FilterNats;
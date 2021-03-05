import axios from "axios";
import FilterNats from "./FilterNats";
import FilterName from "./FilterName";


// const nats = state.filterNatsValue

// Random User call for names and locations only (to test) with no seed, results, page, etc
export default {

  // const nats = "gb"  //testing... should equal drop-down menu selection
  // const name = "Brad"


  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?inc=name,location&noinfo");
  },

  filterEmployeeNats: function(nats) {
    return axios.get("https://randomuser.me/api/?nat=gb")
  },

  filterEmployeeName: function(name) {
    return axios.get("https://randomuser.me/api/?name=Brad")
  }

//Add additional methods for filter & single employee?

};
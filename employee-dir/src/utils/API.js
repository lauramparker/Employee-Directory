import axios from "axios";


const query = "https://randomuser.me/api/?results=50?inc=name,location&noinfo" //limited to 50

export default {
  getEmployeesList: function(query) {
    return axios.get(query); 
  }

}

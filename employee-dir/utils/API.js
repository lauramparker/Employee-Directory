import axios from "axios";

const BASEURL = "https://randomuser.me/api/"; //BASEURL, no API Key needed for Random User

// Export an object with a "search" method that searches the RANDOM USER API
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
import axios from "axios";
import * as Config from "../constants/Config";

// axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`

const callApi = (endpoint, method, data) => {
  const token = localStorage.getItem("token");
  axios.defaults.baseURL = `${Config.API_URL}`;
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  return axios({
    method,
    url: `/${endpoint}`,
    data,
  });
};

export default callApi;

import axios from "axios";
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://water-my-plant-9000.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

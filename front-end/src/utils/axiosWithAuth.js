import axios from "axios";
<<<<<<< HEAD
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://water-my-plant-9000.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
=======

const axiosWithAuth = () => {
  const token = localStorage.getItem("userToken");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};

export default axiosWithAuth;
>>>>>>> 46e03535f328468f13ab7b6765bbce2d9ff37035

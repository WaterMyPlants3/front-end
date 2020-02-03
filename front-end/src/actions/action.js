import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

// Action to Perform Login operation
const API = "https://water-my-plant-9000.herokuapp.com/";

// Create User Actions
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_RESOLVED = "CREATE_RESOLVED";
export const CREATE_FAIL = "CREATE_FAIL";

export const create = user => dispatch => {
  dispatch({ type: CREATE_START });
  return axios
    .post(`${API}/register`, user)
    .then(res => {
      dispatch({
        type: CREATE_SUCCESS,
        payload: res.data.msg,
        status: "success"
      });
      setTimeout(() => dispatch({ type: CREATE_RESOLVED }), 1500);
    })
    .catch(err => {
      dispatch({ type: CREATE_FAIL, payload: err.response });
    });
};

// Login actions
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${API}/login`, credentials)
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem("userToken", res.data.token);
        console.log(res.data);
        console.log(`Success 1: ${res.data.token}.`);
        localStorage.setItem("userId", res.data.userid);
        axios.create({
          "Content-Type": "application/json",
          headers: {
            Authorization: res.data.token
          }
        });
      } else {
        console.log("Status: " + res.status);
      }
    })
    .catch(err => {
      if (err.response.status === 500 || err.response.status === 404) {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response.data.msg,
          status: "error"
        });
      }
      setTimeout(() => dispatch({ type: LOGIN_RESOLVED }), 1500);
    });
};

// Action to fetch list of plants available
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  axiosWithAuth()
    .get(`${API}/api/plants`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err });
    });
};

export const GET_USER = "GET_USER";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const getUser = () => dispatch => {
  axiosWithAuth()
    .get(`${API}/api/users/${localStorage.getItem("userId")}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_USER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAIL, payload: err });
    });
};

export const GET_PLANT = "GET_PLANT";
export const GET_PLANT_FAIL = "GET_PLANT_FAIL";

export const getPlant = id => dispatch => {
  axiosWithAuth()
    .get(`${API}/api/users/2/plants/${id}`)
    .then(res => {
      dispatch({ type: GET_USER, payload: res.data.username });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAIL, payload: err });
    });
};

// Action to create a new plant
export const CREATE_PLANT_START = "CREATE_PLANT_START";
export const CREATE_PLANT_SUCCESS = "CREATE_PLANT_SUCCESS";
export const CREATE_PLANT_FAIL = "CREATE_PLANT_FAIL";

export const createPlant = newPlant => dispatch => {
  dispatch({ type: CREATE_PLANT_START });
  axiosWithAuth()
    .post(`${API}/plants`, newPlant)
    .then(res => {
      dispatch({
        type: CREATE_PLANT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: CREATE_PLANT_FAIL, payload: err.response });
    });
};

// Action to update user plant information
export const USER_EDIT_PLANT_START = "USER_EDIT_PLANT_START";
export const USER_EDIT_PLANT_SUCCESS = "USER_EDIT_PLANT_SUCCESS";
export const USER_EDIT_PLANT_FAIL = "USER_EDIT_PLANT_FAIL";

export const userEditPlant = (id, updatedPlant) => dispatch => {
  dispatch({ type: USER_EDIT_PLANT_START });
  axiosWithAuth()
    .put(`${API}/api/users/4/plants/${id}`, updatedPlant)
    .then(res => {
      dispatch({
        type: USER_EDIT_PLANT_SUCCESS,
        payload: res.data,
        id
      });
    })
    .catch(err => {
      dispatch({ type: USER_EDIT_PLANT_FAIL, payload: err.response });
    });
};

// Action to perform Delete operation
export const DELETE_PLANT_START = "DELETE_PLANT_START";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAIL = "DELETE_PLANT_FAIL";

export const deletePlant = id => dispatch => {
  dispatch({ type: DELETE_PLANT_START });
  axiosWithAuth()
    .delete(`/api/plants/5/${id}`)
    .then(
      axiosWithAuth()
        .get(`${API}/api/plants/5/`)
        .then(res =>
          dispatch({
            type: DELETE_PLANT_SUCCESS,
            payload: res.data
          })
        )
    )
    .catch(err => {
      dispatch({ type: DELETE_PLANT_FAIL, payload: err.response });
    });
};

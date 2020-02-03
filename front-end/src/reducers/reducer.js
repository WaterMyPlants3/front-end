import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  CREATE_PLANT_START,
  CREATE_PLANT_SUCCESS,
  CREATE_PLANT_FAIL,
  DELETE_PLANT_START,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_RESOLVED,
  RESOLVE_PLANT_START,
  RESOLVE_PLANT_SUCCESS,
  //   RESOLVE_PLANT_FAIL,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_FAIL,
  CREATE_RESOLVED,
  GET_USER,
  GET_USER_FAIL,
  GET_PLANT,
  GET_PLANT_FAIL
} from "../actions/action";

const initialState = {
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false,
  isLoggedIn: false,
  isSigningUp: false,
  creatingPlants: false,
  updatingPlants: false,
  resolvingPlants: false,
  deletingPlants: false,
  status: null,
  error: null,
  users: [],
  user: {
    username: ""
  },
  plants: []
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingData: true,
        error: null
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        plants: action.payload
      };

    case FETCH_DATA_FAIL:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    case CREATE_PLANT_START:
      return {
        ...state,
        error: "",
        creatingPlant: true
      };

    case CREATE_PLANT_SUCCESS:
      return {
        ...state,
        creatingPlant: false,
        plant: [...state.plant, action.payload]
      };

    case CREATE_PLANT_FAIL:
      return {
        ...state,
        creatingPlant: false,
        error: action.payload
      };

    case DELETE_PLANT_START:
      return {
        ...state,
        error: "",
        deletingPlant: true
      };

    case DELETE_PLANT_SUCCESS:
      return {
        ...state,
        deletingPlant: false,
        plants: action.payload
      };

    case DELETE_PLANT_FAIL:
      return {
        ...state,
        deletingPlant: false,
        error: action.payload
      };

    case USER_EDIT_PLANT_START:
      return {
        ...state,
        error: "",
        updatingPlant: true
      };

    case USER_EDIT_PLANT_SUCCESS:
      return {
        ...state,
        plants: state.plants.map(plant => {
          if (Number(plant.id) === Number(action.id)) {
            plant = action.payload;
          }
          return plant;
        })
      };

    case USER_EDIT_PLANT_FAIL:
      return {
        ...state,
        updatingPlant: false,
        error: action.payload
      };

    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      };
    }

    case LOGIN_SUCCESS: {
      console.log(state);
      console.log(action);
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        token: action.token,
        id: action.id,
        username: action.username,
        status: action.status,
        error: action.message
      };
    }

    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLoggingIn: false,
        status: null,
        error: null
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
        status: action.status
      };
    }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };

    case CREATE_START: {
      return {
        ...state,
        isSigningUp: true
      };
    }

    case CREATE_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        error: action.payload,
        status: action.status
      };
    }

    case CREATE_RESOLVED: {
      return {
        ...state,
        isSigningUp: false,
        error: null,
        status: null
      };
    }

    case CREATE_FAIL: {
      return {
        ...state,
        isSigningUp: false,
        error: action.payload
      };
    }

    case RESOLVE_PLANT_START:
      const editPlant = state.plants.map(plant => {
        if (Number(plant.id) === Number(action.id)) {
          plant.resolved = !plant.resolved;
        }
        return plant;
      });
      return {
        ...state,
        plants: editPlant
      };

    case RESOLVE_PLANT_SUCCESS:
      return {
        ...state,
        plants: [...state.plant, action.payload]
      };

    // case RESOLVE_PLANT_FAIL:
    //   return {
    //     ...state,
    //     error: action.payload
    //   };

    case GET_USER:
      return {
        ...state,
        users: ``
      };

    case GET_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case GET_PLANT:
      return {
        plants: ``,
        error: action.payload
      };

    case GET_PLANT_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducers;

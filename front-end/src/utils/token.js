import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "../actions/action";

export const setToken = next => action => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("userToken", action.token);
      next(action);
      return;

    case LOGIN_FAIL:
      localStorage.removeItem("userToken");
      next(action);
      return;

    case LOGOUT_SUCCESS:
      localStorage.removeItem("userToken");
      localStorage.removeItem("state");
      next(action);
      return;

    default:
      next(action);
      return;
  }
};

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { setToken } from "./utils/token";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers/reducer";

const store = createStore(reducers, applyMiddleware(thunk, setToken));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { setToken } from "./utils/token";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducers, applyMiddleware(thunk, setToken));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

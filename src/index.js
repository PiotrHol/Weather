import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./App";
// eslint-disable-next-line
import app from "./firebase";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

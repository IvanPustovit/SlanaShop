import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "../src/css/Home/index.scss";
import App from "./App";
import ErrorHandler from "./components/common/ErrorHandler";
import configureStore from "./redux/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ErrorHandler>
      <HashRouter>
        <App />
        <Toaster />
      </HashRouter>
    </ErrorHandler>
  </Provider>,
  document.getElementById("root")
);

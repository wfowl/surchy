import React from "react";
import ReactDom from "react-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// serviceworker.unregister();

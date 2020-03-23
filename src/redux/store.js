import { createStore } from "redux";
import reducer from "./reducers.js";

const store = createStore(reducer, {
  options: {
    recursive: false
  },
  directory: "",
  searchTerms: ""
});

export default store;

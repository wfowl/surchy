import { createStore } from "redux";
import reducer from "./reducers.js";

const devStore = {
  options: {
    recursive: false
  },
  directory: "/path/to/files",
  searchTerms: "enter\nsearch\nterms\nhere"
};

const prodStore = {
  options: {
    recursive: false
  },
  directory: "",
  searchTerms: ""
};

const store =
  process.env.NODE_ENV === "development"
    ? createStore(reducer, devStore)
    : createStore(reducer, prodStore);

export default store;

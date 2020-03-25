import { createStore } from "redux";
import reducer from "./reducers.js";

const devStore = {
  options: {
    recursive: false
  },
  directory: "/Users/williamfowler/Projects/file_search_test",
  searchTerms: "21471\n47460\n6911"
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

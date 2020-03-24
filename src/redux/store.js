import { createStore } from "redux";
import reducer from "./reducers.js";

const store = createStore(reducer, {
  options: {
    recursive: false,
    mostRecent: false
  },
  directory: "/Users/williamfowler/Projects/file_search_test",
  searchTerms: "21471\n47460\n6911"
});

export default store;

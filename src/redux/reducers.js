import {
  UPDATE_DIRECTORY,
  UPDATE_OPTIONS,
  UPDATE_SEARCH_TERMS
} from "./action_types.js";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_DIRECTORY:
      return { ...state, directory: action.directory };
    case UPDATE_OPTIONS:
      return { ...state, options: action.options };
    case UPDATE_SEARCH_TERMS:
      return { ...state, searchTerms: action.searchTerms };
    default:
      return state;
  }
}

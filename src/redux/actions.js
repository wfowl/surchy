import {
  UPDATE_DIRECTORY,
  UPDATE_OPTIONS,
  UPDATE_SEARCH_TERMS
} from "./action_types.js";

export function updateDirectory(directory) {
  return {
    type: UPDATE_DIRECTORY,
    directory
  };
}

export function updateOptions(options) {
  return {
    type: UPDATE_OPTIONS,
    options
  };
}

export function updateSearchTerms(searchTerms) {
  return {
    type: UPDATE_SEARCH_TERMS,
    searchTerms
  };
}

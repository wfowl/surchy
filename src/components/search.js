import React from "react";
import { connect } from "react-redux";
import { updateSearchTerms } from "../redux/actions.js";

function Search(props) {
  const { searchTerms } = props;

  function handleChange(event) {
    props.updateSearchTerms(event.target.value);
  }

  function trimSearchTerms() {
    let terms = searchTerms.split("\n");
    terms = terms.map(term => term.trim());
    terms = terms.join("\n");
    props.updateSearchTerms(terms);
  }

  return (
    <div>
      <div class="flex items-center mt-6">
        <h3 class="inline-block text-white uppercase tracking-widest font-normal text-xl select-none">
          Search Phrases
        </h3>
        <span
          class="inline-block uppercase tracking-widest font-normal text-xs text-white bg-gray-700 px-2 ml-3 hover:bg-gray-600 cursor-pointer select-none"
          onClick={trimSearchTerms}
        >
          Trim
        </span>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        class="w-full mt-1"
        placeholder="Enter the phrases you would like to search for.
One per line."
        value={searchTerms}
        onChange={handleChange}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchTerms: state.searchTerms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchTerms: searchTerms => dispatch(updateSearchTerms(searchTerms))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

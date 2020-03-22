import React from "react";

function Search() {
  return (
    <div>
      <div class="flex items-center mt-6">
        <h3 class="inline-block text-white uppercase tracking-widest font-normal text-xl ">
          Search Phrases
        </h3>
        <span class="inline-block uppercase tracking-widest font-normal text-xs text-white bg-gray-700 px-2 ml-3 hover:bg-gray-600 cursor-pointer select-none">
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
      ></textarea>
    </div>
  );
}

export default Search;

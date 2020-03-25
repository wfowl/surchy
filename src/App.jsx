import React, { useState } from "react";
import { connect } from "react-redux";

import Directory from "./components/Directory.jsx";
import Options from "./components/Options.jsx";
import Search from "./components/Search.jsx";

import {
  filesContainsContent,
  getFilesFromDir
} from "./utilities/file_helpers.js";

import { ipcRenderer } from "electron";

function App(props) {
  function runSearch() {
    const USE_RECURSION = props.options.recursive;
    const dir = props.directory;
    const list = props.searchTerms.split("\n").filter(term => {
      return term != "";
    });

    if (dir && list) {
      const files = getFilesFromDir(dir, USE_RECURSION);
      let report = "";
      if (files.length > 0) {
        ipcRenderer.send("send_results", filesContainsContent(files, list)); //TODO - currently filesContainContent returns a string report, needs to be reworked to respond with an array of values
      } else {
        ipcRenderer.send("send_resultS", "No files found in this directory");
      }
    }
  }

  return (
    <div class="flex justify-center">
      <div class="w-11/12">
        <div>
          <h1 class="text-white font-bold tracking-widest lowercase text-4xl mt-4 select-none">
            Surchy
          </h1>
          <hr class="mt-4" />
        </div>

        <Directory />
        <Search />
        <Options />

        <div class="flex justify-center mt-12">
          <input
            type="button"
            class="tracking-widest font-semibold uppercase bg-gray-700 text-white px-5 py-2 content-center hover:bg-gray-600 cursor-pointer select-none outline-none w-20 h-10"
            value="run"
            onClick={runSearch}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    directory: state.directory,
    searchTerms: state.searchTerms,
    options: state.options
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

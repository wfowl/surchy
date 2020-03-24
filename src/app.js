import React from "react";
import { connect } from "react-redux";

import Directory from "./components/Directory.js";
import Options from "./components/Options.js";
import Search from "./components/Search.js";

import {
  filesContainsContent,
  getFilesFromDir
} from "./utilities/file_helpers.js";

import { remote } from "electron";

import path from "path";

const { BrowserWindow } = remote;

const childWindow = new BrowserWindow({
  width: 500,
  height: 650,
  resizable: false,
  webPreferences: {
    nodeIntegration: true
  },
  show: true
});

let pathp = path.join(process.cwd(), "src/resultsWindow/index.html");
console.log(pathp);
childWindow.loadFile(pathp);
childWindow.webContents.openDevTools();

function App(props) {
  // function runSearch() {
  //   const USE_RECURSION = props.options.recursive;
  //   const dir = props.directory;
  //   const list = props.searchTerms.split("\n");

  //   if (dir && list) {
  //     const files = getFilesFromDir(dir, USE_RECURSION);
  //     if (files.length > 0) {
  //       const secondWindow = new BrowserWindow({ width: 800, height: 600 });
  //       secondWindow.loadFile("resultsWindow/index.html");
  //       filesContainsContent(files, list); //TODO
  //     }
  //   }
  // }

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
            class="tracking-widest font-semibold uppercase bg-gray-700 text-white px-5 py-2 content-center hover:bg-gray-600 cursor-pointer select-none outline-none"
            value="run"
            // onClick={runSearch}
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

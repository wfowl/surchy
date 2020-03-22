import React from "react";
import Directory from "./components/Directory.js";
import Options from "./components/Options.js";
import Search from "./components/Search.js";

function App() {
  return (
    <div class="flex justify-center">
      <div class="w-11/12">
        <div>
          <h1 class="text-white font-bold tracking-widest lowercase text-4xl mt-4">
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
          />
        </div>
      </div>
    </div>
  );
}

export default App;

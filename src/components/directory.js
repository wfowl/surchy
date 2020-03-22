import React from "react";
import { connect } from "react-redux";
import { updateDirectory } from "../redux/actions.js";

function Directory() {
  return (
    <div>
      <h3 class="text-white uppercase tracking-widest font-normal text-xl mt-6">
        Directory
      </h3>
      <input type="text" class="w-full mt-1" onclick="browsePath()" />
    </div>
  );
}

export default connect(null, { updateDirectory })(Directory);

import React from "react";
import { connect } from "react-redux";
import { updateDirectory } from "../redux/actions.js";

function Directory(props) {
  const { directory } = props;
  const isWindows = navigator.platform.indexOf("Win") > -1;

  function updateDirectory(event) {
    props.updateDirectory(event.target.value);
  }

  return (
    <div>
      <h3 class="text-white uppercase tracking-widest font-normal text-xl mt-6 select-none">
        Directory
      </h3>
      <input
        type="text"
        class="w-full mt-1"
        onclick="browsePath()"
        placeholder={
          isWindows
            ? "C:\\Users\\User\\Desktop\\file_dir"
            : "/example/full/path/"
        }
        value={directory}
        onChange={updateDirectory}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    directory: state.directory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDirectory: directory => dispatch(updateDirectory(directory))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);

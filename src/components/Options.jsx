import React from "react";
import { connect } from "react-redux";
import { updateOptions } from "../redux/actions.js";

function Options(props) {
  const { options } = props;

  function toggleRecursion() {
    props.updateOptions({ ...options, recursive: !options.recursive });
  }

  return (
    <div>
      <div>
        <h3 class="text-white uppercase tracking-widest font-normal text-xl mt-6 select-none">
          Options
        </h3>
        <label
          class="container lowercase tracking-widest"
          style={{
            display: "block",
            position: "relative",
            paddingLeft: 35,
            marginBottom: 12,
            cursor: "pointer",
            userSelect: "none",
            color: "white"
          }}
        >
          <span onClick={toggleRecursion}>Recursive</span>
          <input
            type="checkbox"
            style={{
              position: "absolute",
              opacity: 0,
              cursor: "pointer",
              height: 0,
              width: 0
            }}
          />
          <span
            class="checkmark"
            style={{
              position: "absolute",
              top: 6,
              left: 13,
              height: 15,
              width: 15,
              backgroundColor: "black",
              border: "solid white",
              borderWidth: options.recursive ? "thick" : "thin"
            }}
            onClick={toggleRecursion}
          ></span>
        </label>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    options: state.options
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateOptions: options => dispatch(updateOptions(options))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);

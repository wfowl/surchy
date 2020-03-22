import React from "react";

function Options() {
  return (
    <div>
      <div>
        <h3 class="text-white uppercase tracking-widest font-normal text-xl mt-6">
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
          Recursive
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
              borderWidth: "thin"
            }}
          ></span>
        </label>
      </div>
    </div>
  );
}

export default Options;

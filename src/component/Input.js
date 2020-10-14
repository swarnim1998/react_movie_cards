import React from "react";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Movie Name"
        onChange={(event) => props.onChange(event)}
        style={{ position: "fixed", width: "100%", zIndex: "1", top: "90px" }}
      />
    </div>
  );
}

export default Input;

import React from "react";

function DisplayBox(props) {
  const { onHandleData } = props;
  return (
    <div>
      <h1>Parent values</h1>
      <p>Number A {props.numbers[0]}</p>
      <p>Number B {props.numbers[1]}</p>

      {/* Update parent from child */}
      <button
        onClick={() => {
          onHandleData(2);
        }}
      >
        Update Parent's State!
      </button>
    </div>
  );
}

export default DisplayBox;

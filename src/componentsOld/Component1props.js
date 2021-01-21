import React, { useState } from "react";

import DisplayBox from "./DisplayBox";

function Component1props() {
  const [state, setState] = useState({ counterA: 0, counterB: 0 });

  const addToA = () => {
    setState({ ...state, counterA: state.counterA + 1 });
  };

  const addToB = () => {
    setState({ ...state, counterB: state.counterB + 1 });
  };

  const addToAandB = () => {
    setState({ counterA: state.counterA + 1, counterB: state.counterB + 1 });
  };

  //   Update parent from child
  const handleData = (data) => {
    setState({ ...state, counterA: state.counterA + data });
  };

  return (
    <div className="container">
      <h1>State, props, child/parent</h1>
      <p>You clicked button A {state.counterA} times</p>
      <p>You clicked button B {state.counterB} times</p>
      <div className="buttons-container">
        <button
          onClick={() => {
            addToA(5);
          }}
        >
          Add to A
        </button>
        <button onClick={addToB}>Add to B</button>
        <button onClick={addToAandB}>Add to A and B</button>
      </div>
      <DisplayBox numbers={[state.counterA, state.counterB]} onHandleData={handleData} />
    </div>
  );
}

export default Component1props;

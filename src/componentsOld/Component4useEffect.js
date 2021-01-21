import React, { useState, useEffect } from "react";

function Component4useEffect() {
  const [state, setState] = useState({ countA: 0, countB: 0 });

  //Rendered at the start
  useEffect(() => {
    console.log("rendered at the start");
  }, []);

  //Rendered everytime any state updates
  useEffect(() => {
    console.log("rendered everytime state updates");

    //unmount
    return () => {
      console.log("unmounted everytime time");
    };
  });

  //Rendered when countA updates
  useEffect(() => {
    console.log("rendered everytime countA updates");
  }, [state.countA]);

  const increaseCountA = () => {
    setState({ ...state, countA: state.countA + 1 });
  };
  const increaseCountB = () => {
    setState({ ...state, countB: state.countB + 1 });
  };

  return (
    <div className="container container-line">
      <h1>Use effect hook</h1>
      <button onClick={increaseCountA}>Increase count A</button>
      <p>{state.countA}</p>
      <button onClick={increaseCountB}>Increase count B</button>
      <p>{state.countB}</p>
    </div>
  );
}

export default Component4useEffect;

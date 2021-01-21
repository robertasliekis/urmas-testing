import React, { useState } from "react";
import { connect } from "react-redux";
import { playBackgroundAudio } from "../actions";

import DisplayBox from "./DisplayBox";

function Component1props(props) {
  // refc
  let buttonRef = React.createRef();

  const [state, setState] = useState({ counterA: 0, counterB: 0 });

  const [childData, setChildData] = useState(null);

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
    //console.log(data);
    // setChildData(data);
    setState({ ...state, counterA: state.counterA + data });
  };

  const makeButtonRed = (e) => {
    //event target
    e.target.classList.add("red-button");

    console.log(props.backgroundAudioPlaying);
    props.playBackgroundAudio(true);
    //refs target
    buttonRef.current.classList.add("red-button");
  };

  return (
    <div className="container">
      <h1>Number addition</h1>
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
        {/* Not passing function variables */}
        <button onClick={addToB}>Add to B</button>
        <button onClick={addToAandB}>Add to A and B</button>
        <button ref={buttonRef} onClick={makeButtonRed}>
          Make it red
        </button>
      </div>
      {/* Passing function variables */}

      <DisplayBox numbers={[state.counterA, state.counterB]} onHandleData={handleData} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    backgroundAudioPlaying: state.playBackgroundAudio.backgroundAudioPlaying
  };
};

const mapDispatchToProps = {
  playBackgroundAudio
};

export default connect(mapStateToProps, mapDispatchToProps)(Component1props);

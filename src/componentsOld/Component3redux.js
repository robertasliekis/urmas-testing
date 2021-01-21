import React from "react";
import { connect } from "react-redux";
import { playBackgroundAudio } from "../actions";

function Component3redux(props) {
  const makeButtonRed = () => {
    console.log(props.backgroundAudioPlaying);
    props.playBackgroundAudio(true);
  };

  return (
    <div className="container container-line">
      <h1>Redux</h1>
      <button onClick={makeButtonRed}>Get global state</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Component3redux);

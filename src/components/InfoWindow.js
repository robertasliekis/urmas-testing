import React from "react";
import { connect } from "react-redux";
import { openInfoWindow } from "../actions";
import { Link } from "react-router-dom";
import urlText from "./urlText";

function InfoWindow(props) {
  const tourStartedClicked = () => {
    //  props.openInfoWindow(false);
  };

  return (
    <div
      className="window-container info-container"
      // style={{ opacity: props.infoWindowOpen ? 1 : 0, zIndex: props.infoWindowOpen ? 5 : 1 }}
    >
      <div className="content">
        <div className="intro-title">
          <div className="text">
            Creative Centenary:
            <div className="line"></div>
          </div>
          <div className="text">100 years of Diplomatic Service of Lithuania</div>
        </div>
        <p className="text-box">
          Welcome to the exhibition presenting the heritage of the Diplomatic Service of Lithuania, as well as its present activities, in
          the very building, where the interwar governments sessioned.
        </p>
        <div className="text-bubble">
          <p>Choose topic you are curious about and start exploring.</p>
          <p>And don’t forget to go through all the subtopics by using these navigation buttons:</p>
          <div className="buttons-container">
            <div className="btn btn-left btn-round"></div>
            <div className="subtopic-count">1/3</div>
            <div className="btn btn-right btn-round"></div>
          </div>
        </div>
        <div className="ref-image" style={{ backgroundImage: `url("./images/ref.jpg")` }}></div>
      </div>
      <Link className="btn btn-start" onClick={() => tourStartedClicked()} to={`${urlText}/`}>
        <div className="active-zone">
          tap to start <div className="line"></div>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    infoWindowOpen: state.openInfoWindow.infoWindowOpen
  };
};

const mapDispatchToProps = {
  openInfoWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoWindow);

import React from "react";
import { connect } from "react-redux";
import { startTour } from "../actions";

function IntroWindow(props) {
  const tourStartedClicked = () => {
    props.startTour(true);
  };

  return (
    <div className="window-container intro-container" style={{ opacity: props.tourStarted ? 0 : 1, zIndex: props.tourStarted ? 1 : 5 }}>
      <div className="content">
        <div className="intro-title">
          <div className="text">
            Muziejaus
            <div className="line"></div>
          </div>
          <div className="text">Pavadinimas</div>
        </div>
        <p className="text-box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore explicabo rem omnis porro. Voluptas fuga, omnis eligendi maxime
          magnam dicta officiis amet. Porro alias tenetur dolor cumque quas dolores delectus.
        </p>
        <div className="text-bubble">
          <p>Choose topic you are curious about and start exploring.</p>
          <p>And don’t forget to go through all the subtopics by using these navigation buttons:</p>
          <div className="buttons-container">
            <div className="btn btn-left btn-round"></div>
            <div className="page-count">1/3</div>
            <div className="btn btn-right btn-round"></div>
          </div>
        </div>
        <div className="ref-image" style={{ backgroundImage: `url("./images/ref.jpg")` }}></div>
      </div>
      <div className="btn btn-start" onClick={() => tourStartedClicked()}>
        <div className="active-zone">
          tap to start <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tourStarted: state.startTour.tourStarted
  };
};

const mapDispatchToProps = {
  startTour
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroWindow);

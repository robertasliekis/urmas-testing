import React, { useState } from "react";
import { Link } from "react-router-dom";

import urlText from "./urlText";

import topics from "../data/topicsData";

import { connect } from "react-redux";
import { openTopicWindow } from "../actions";

function TopicWindow(props) {
  const subtopicContainerRef = React.createRef();

  const [subtopicIndex, setSubtopicIndex] = useState(0);

  const subtopicsCount = topics[props.topicIndex].subtopics.length;
  const subtopicsDescriptions = topics[props.topicIndex].subtopics[subtopicIndex].description;

  const buttonBackClicked = () => {
    // let topicWindow = { topicOpen: false, topicIndex: props.topicIndex };
    // props.openTopicWindow(topicWindow);

    // setTimeout(function () {
    //   setSubtopicIndex(0);
    // }, 700);
    setSubtopicIndex(0);
    subtopicContainerRef.current.scrollTo(0, 0);
  };

  const topicCarouselClicked = (direction) => {
    if ((direction === -1 && subtopicIndex !== 0) || (direction === 1 && subtopicIndex !== subtopicsCount - 1)) {
      setSubtopicIndex(subtopicIndex + direction);
    }
    subtopicContainerRef.current.scrollTo(0, 0);
  };

  return (
    <div
      className="window-container topic-window-container"
      //  style={{ opacity: props.topicOpen ? 1 : 0, zIndex: props.topicOpen ? 5 : 1 }}
    >
      <div className="content">
        <div className="title">
          <p>Creative Centenary:</p>
          <p>100 years of Diplomatic Service of Lithuania</p>
          <Link className="btn btn-back" onClick={() => buttonBackClicked()} to={`${urlText}/`}></Link>
        </div>
        <div className="info-header">
          <div className="text">
            <div className="line"></div>
            {topics[props.topicIndex].topicTitle}
          </div>
          <div className="text">
            {topics[props.topicIndex].subtopics[subtopicIndex].subtopic}
            <div className="line"></div>
          </div>
        </div>
        <div className="subtopic-wrapper" ref={subtopicContainerRef} key={subtopicIndex}>
          {subtopicsDescriptions.map((description, index) => {
            return (
              <div className="subtopic-description-container" key={index}>
                {description[0] !== "" ? (
                  <div className="description">
                    <p>{description[0]}</p>
                    {props.topicIndex === 0 ? <div className="stamp-image"></div> : null}
                  </div>
                ) : null}
                {description[2] !== undefined ? (
                  <img
                    src={`photos/${topics[props.topicIndex].id}/image${description[2]}.jpg`}
                    className="image"
                    alt="urmas"
                    style={{
                      backgroundImage: `url("/photos/${topics[props.topicIndex].id}/image${description[2]}.jpg")`,
                      marginBottom: description[1] === `` ? "30px" : "10px"
                    }}
                  ></img>
                ) : null}
                {description[1] !== "" ? <p className="image-description">{description[1]}</p> : null}
              </div>
            );
          })}
        </div>
        <div className="content-bottom">
          <div className="buttons-container">
            <div
              className="btn btn-left btn-round"
              onClick={() => topicCarouselClicked(-1)}
              style={{ opacity: subtopicIndex === 0 ? 0.5 : 1 }}
            >
              <div className="icon"></div>
            </div>
            <div className="subtopic-count">{`${subtopicIndex + 1}/${subtopicsCount}`}</div>
            <div
              className="btn btn-right btn-round"
              onClick={() => topicCarouselClicked(1)}
              style={{ opacity: subtopicIndex === subtopicsCount - 1 ? 0.5 : 1 }}
            >
              <div className="icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    topicOpen: state.openTopicWindow.topicOpen,
    topicIndex: state.openTopicWindow.topicIndex
  };
};

const mapDispatchToProps = {
  openTopicWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicWindow);

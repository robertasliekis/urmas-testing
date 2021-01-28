import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openInfoWindow, openTopicWindow } from "../actions";
import topics from "../data/topicsData";
import urlText from "./urlText";

function TopicSelection(props) {
  const topicClicked = (index) => {
    let topicWindow = { topicOpen: true, topicIndex: index, urlIndex: index + 1 };
    props.openTopicWindow(topicWindow);
  };

  const infoButtonClicked = () => {
    //  props.openInfoWindow(true);
  };

  return (
    <div className="window-container topics-container">
      <div className="content">
        <div className="title">
          <p>Creative Centenary:</p>
          <p>100 years of Diplomatic Service of Lithuania</p>
        </div>
        <div className="topics-header">
          <p>Choose Topic </p>
          <div className="icons-container">
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
        <div className="topics-list-wrapper">
          <div className="topics-list">
            {topics.map((topic, index) => (
              <Link className="topic" key={topic.id} onClick={() => topicClicked(index)} to={`${urlText}/${index + 1}`}>
                <div className="topic-number">{`${index + 1}/${topics.length}`}</div>
                <div className="topic-title">{topic.topicTitle}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="content-bottom">
          <Link className="btn btn-round btn-info" onClick={() => infoButtonClicked()} to={`${urlText}/info`}>
            <div className="icon"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    infoWindowOpen: state.openInfoWindow.openInfoWindow,
    topicOpen: state.openTopicWindow.topicOpen
  };
};

const mapDispatchToProps = {
  openInfoWindow,
  openTopicWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicSelection);

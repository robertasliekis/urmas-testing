import React, { useState } from "react";
import { connect } from "react-redux";
import { startTour, openTopicWindow } from "../actions";
import topics from "../data/topics";

function TopicSelection(props) {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const topicClicked = (index) => {
    let topicWindow = { topicWindowOpen: true, topicWindowIndex: index };
    props.openTopicWindow(topicWindow);
  };

  const infoButtonClicked = () => {
    setInfoWindowOpen(!infoWindowOpen);
  };

  return (
    <div className="window-container topics-container">
      <div className="content">
        <div className="title">Muziejaus pavadinimas</div>
        <div className="topics-header">Choose topic</div>
        <div className="topics-list-wrapper">
          <div className="topics-list">
            <div className="icons-container">
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
            {topics.map((topic, index) => (
              <div className="topic" key={index} onClick={() => topicClicked(index)}>
                <div className="topic-number">{`${index + 1}/${topics.length}`}</div>
                <div className="topic-title">{topic.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-bottom">
          <div className="btn btn-round btn-info" onClick={() => infoButtonClicked()}>
            <div className="icon"></div>
          </div>
        </div>

        <div className="ref-image" style={{ backgroundImage: `url("./images/ref2.jpg")` }}></div>
      </div>
      <div className="info-window" style={{ opacity: infoWindowOpen ? 1 : 0, zIndex: infoWindowOpen ? 5 : -1 }}>
        <div className="btn btn-close" onClick={() => infoButtonClicked()}>
          x
        </div>
        <p>INFO WINDOW</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eligendi quidem perferendis obcaecati reiciendis atque vel
          nostrum laboriosam itaque sunt dolores iusto, perspiciatis tenetur provident, veniam animi repellat incidunt maxime blanditiis
          nihil facere quia iste eaque voluptas. Dicta deserunt adipisci, animi voluptas debitis placeat doloremque repellat, quo nam
          similique voluptatem?
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tourStarted: state.startTour.tourStarted,
    topicWindowOpen: state.openTopicWindow.topicWindowOpen
  };
};

const mapDispatchToProps = {
  startTour,
  openTopicWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicSelection);

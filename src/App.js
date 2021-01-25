import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { openTopicWindow } from "./actions";

import TopicSelection from "./components/TopicSelection";
import InfoWindow from "./components/InfoWindow";
import TopicWindow from "./components/TopicWindow";

//"homepage": "https://robertasliekis.github.io/urmas-testing/",

function App(props) {
  useEffect(() => {
    let url = window.location.href;
    let urlIndex = parseInt(url.substring(url.lastIndexOf("/") + 1));
    if (urlIndex > 0 && urlIndex < 20) {
      let topicWindow = { topicOpen: true, topicIndex: urlIndex - 1, urlIndex: urlIndex };
      props.openTopicWindow(topicWindow);
    }
  }, [props]);

  return (
    <Router>
      <div className="website-wrapper">
        <Switch>
          <Route exact path={"/"} component={TopicSelection} />
          <Route path={`/${props.urlIndex}`} component={TopicWindow} />
          <Route path={`/info`} component={InfoWindow} />
          <Route path="*" component={TopicSelection} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    topicOpen: state.openTopicWindow.topicOpen,
    topicIndex: state.openTopicWindow.topicIndex,
    urlIndex: state.openTopicWindow.urlIndex
  };
};

const mapDispatchToProps = {
  openTopicWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

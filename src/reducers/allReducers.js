import { combineReducers } from "redux";

import startTour from "./startTourReducer";
import openTopicWindow from "./openTopicWindowReducer";

export default combineReducers({
  startTour: startTour,
  openTopicWindow: openTopicWindow
});

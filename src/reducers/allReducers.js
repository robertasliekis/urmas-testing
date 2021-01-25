import { combineReducers } from "redux";

import openInfoWindow from "./openInfoWindowReducer";
import openTopicWindow from "./openTopicWindowReducer";

export default combineReducers({
  openInfoWindow: openInfoWindow,
  openTopicWindow: openTopicWindow
});

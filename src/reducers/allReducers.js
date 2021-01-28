import { combineReducers } from "redux";

import openInfoWindow from "./openInfoWindowReducer";
import openTopicWindow from "./openTopicWindowReducer";
import setUrlText from "./urlTextReducer";

export default combineReducers({
  openInfoWindow: openInfoWindow,
  openTopicWindow: openTopicWindow,
  setUrlText: setUrlText
});

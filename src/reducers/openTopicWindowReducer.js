const initialState = {
  topicOpen: false,
  topicIndex: 0,
  urlIndex: 1
};

const openTopicWindow = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_TOPIC_WINDOW":
      return { ...state, topicOpen: action.payload.topicOpen, topicIndex: action.payload.topicIndex, urlIndex: action.payload.urlIndex };
    default:
      return state;
  }
};

export default openTopicWindow;

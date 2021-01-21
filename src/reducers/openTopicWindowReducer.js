const initialState = {
  topicWindowOpen: false,
  topicWindowIndex: null
};

const openTopicWindow = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_TOPIC_WINDOW":
      return { ...state, topicWindowOpen: action.payload.topicWindowOpen, topicWindowIndex: action.payload.topicWindowIndex };
    default:
      return state;
  }
};

export default openTopicWindow;

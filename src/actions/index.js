export const openInfoWindow = (bool) => {
  return {
    type: "OPEN_INFO_WINDOW",
    payload: bool
  };
};

export const openTopicWindow = (bool) => {
  return {
    type: "OPEN_TOPIC_WINDOW",
    payload: bool
  };
};

export const startTour = (bool) => {
  return {
    type: "START_TOUR",
    payload: bool
  };
};

export const openTopicWindow = (bool) => {
  return {
    type: "OPEN_TOPIC_WINDOW",
    payload: bool
  };
};

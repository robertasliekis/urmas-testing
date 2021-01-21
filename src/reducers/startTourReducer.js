const initialState = {
  tourStarted: false
};

const startTour = (state = initialState, action) => {
  switch (action.type) {
    case "START_TOUR":
      return { ...state, tourStarted: action.payload };
    default:
      return state;
  }
};

export default startTour;

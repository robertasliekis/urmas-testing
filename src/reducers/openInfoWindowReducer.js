const initialState = {
  infoWindowOpen: false
};

const openInfoWindow = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_INFO_WINDOW":
      return { ...state, infoWindowOpen: action.payload };
    default:
      return state;
  }
};

export default openInfoWindow;

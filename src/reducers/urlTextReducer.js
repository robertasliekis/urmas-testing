const initialState = {
  urlText: "/urmas-testing/"
};

const setUrlText = (state = initialState, action) => {
  switch (action.type) {
    case "SET_URL_TEXT":
      return { ...state, urlTex: action.payload };
    default:
      return state;
  }
};

export default setUrlText;

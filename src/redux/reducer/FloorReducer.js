const initialState = {
  floor: [],
  loadingFloor: false,
  messageFloor: "",
};

const FloorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_FLOOR":
      return {
        ...state,
        loadingFloor: true,
      };
    case "REQUEST_FLOOR_SUCCESS":
      return {
        ...state,
        loadingFloor: false,
        floor: action.data,
      };
    case "REQUEST_FLOOR_FAIL":
      return {
        ...state,
        loadingFloor: false,
        messageFloor: action.message,
      };
    case "CLEAR_FLOOR":
      return {
        ...state,
        floor: [],
      };
    default:
      return state;
  }
};

export default FloorReducer;

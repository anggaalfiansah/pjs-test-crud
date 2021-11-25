const initialState = {
  location: [],
  loadingLocation: false,
  messageLocation: "",
};

const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOCATION":
      return {
        ...state,
        loadingLocation: true,
      };
    case "REQUEST_LOCATION_SUCCESS":
      return {
        ...state,
        loadingLocation: false,
        location: action.data,
      };
    case "REQUEST_LOCATION_FAIL":
      return {
        ...state,
        loadingLocation: false,
        messageLocation: action.message,
      };
    case "CLEAR_LOCATION":
      return {
        ...state,
        location: [],
        messageLocation: "",
      };
    default:
      return state;
  }
};

export default LocationReducer;

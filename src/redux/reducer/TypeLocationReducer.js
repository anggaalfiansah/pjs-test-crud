const initialState = {
  typeLocation: [],
  loadingTypeLocation: false,
  messageTypeLocation: "",
};

const TypeLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_TYPE_LOCATION":
      return {
        ...state,
        loadingTypeLocation: true,
      };
    case "REQUEST_TYPE_LOCATION_SUCCESS":
      return {
        ...state,
        loadingTypeLocation: false,
        typeLocation: action.data,
      };
    case "REQUEST_TYPE_LOCATION_FAIL":
      return {
        ...state,
        loadingTypeLocation: false,
        messageTypeLocation: action.message,
      };
    default:
      return state;
  }
};

export default TypeLocationReducer;

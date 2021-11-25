const initialState = {
  detailLocation: null,
  loadingDetailLocation: false,
  messageDetailLocation: "",
};

const DetailLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_DETAIL_LOCATION":
      return {
        ...state,
        loadingDetailLocation: true,
      };
    case "REQUEST_DETAIL_LOCATION_SUCCESS":
      return {
        ...state,
        loadingDetailLocation: false,
        detailLocation: action.data,
      };
    case "REQUEST_DETAIL_LOCATION_FAIL":
      return {
        ...state,
        loadingDetailLocation: false,
        messageDetailLocation: action.message,
      };
    case "CLEAR_DETAIL_LOCATION":
      return {
        ...state,
        detailLocationReducer: null,
        messageDetailLocation: "",
      };
    default:
      return state;
  }
};

export default DetailLocationReducer;

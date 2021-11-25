const initialState = {
  building: [],
  loadingBuilding: false,
  messageBuilding: "",
};

const BuildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BUILDING":
      return {
        ...state,
        loadingBuilding: true,
      };
    case "REQUEST_BUILDING_SUCCESS":
      return {
        ...state,
        loadingBuilding: false,
        building: action.data,
      };
    case "REQUEST_BUILDING_FAIL":
      return {
        ...state,
        loadingBuilding: false,
        messageBuilding: action.message,
      };
    case "CLEAR_BUILDING":
      return {
        ...state,
        building: [],
      };
    default:
      return state;
  }
};

export default BuildingReducer;

import { combineReducers } from "redux";
import BuildingReducer from "./BuildingReducer";
import FloorReducer from "./FloorReducer";
import LocationReducer from "./LocationReducer";
import PostDataReducer from "./PostDataReducer";
import ProjectReducer from "./ProjectReducer";
import TypeLocationReducer from "./TypeLocationReducer";

export default combineReducers({
  typeLocationReducer: TypeLocationReducer,
  projectReducer: ProjectReducer,
  buildingReducer: BuildingReducer,
  floorReducer: FloorReducer,
  locationReducer: LocationReducer,
  postDataReducer: PostDataReducer,
});

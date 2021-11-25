import { all } from "redux-saga/effects";
import typeLocationSaga from "./typeLocationSaga";
import projectSaga from "./projectSaga";
import buildingSaga from "./buildingSaga";
import floorSaga from "./floorSaga";
import postSaga from "./postDataSaga";
import locationSaga from "./locationSaga";
import detailLocationSaga from "./detailLocationSaga";

export default function* rootSaga() {
  yield all([
    typeLocationSaga(),
    projectSaga(),
    buildingSaga(),
    floorSaga(),
    postSaga(),
    locationSaga(),
    detailLocationSaga()
  ]);
}

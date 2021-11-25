import { put, takeLatest } from "@redux-saga/core/effects";
import { getBuilding } from "../../api";

function* requestBuilding(action) {
  try {
    const project = yield getBuilding(action.payload);
    if (project.status === 'success') {
      yield put({
        type: "REQUEST_BUILDING_SUCCESS",
        data: project.data,
      });
    } else {
      yield put({
        type: "REQUEST_BUILDING_FAIL",
        message: project.message,
      });
    }
  } catch (error) {
    yield put({
      type: "REQUEST_BUILDING_FAIL",
      message: error,
    });
  }
}

export default function* buildingSaga() {
  yield takeLatest("REQUEST_BUILDING", requestBuilding);
}

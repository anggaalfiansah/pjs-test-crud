import { put, takeLatest } from "@redux-saga/core/effects";
import { getAllLocation } from "../../api";

function* requestLocation() {
  try {
    const location = yield getAllLocation();
    if (location.status === "success") {
      yield put({
        type: "REQUEST_LOCATION_SUCCESS",
        data: location.data,
      });
    } else {
      yield put({
        type: "REQUEST_LOCATION_FAIL",
        message: location.message,
      });
    }
  } catch (error) {
    yield put({
      type: "REQUEST_LOCATION_FAIL",
      message: error,
    });
  }
}

export default function* locationSaga() {
  yield takeLatest("REQUEST_LOCATION", requestLocation);
}

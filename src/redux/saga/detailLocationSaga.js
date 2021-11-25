import { put, takeLatest } from "@redux-saga/core/effects";
import { getDetailLocationById } from "../../api";

function* requestDetailLocation(action) {
  try {
    const detailLocation = yield getDetailLocationById(action.payload);
    if (detailLocation.status === "success") {
      yield put({
        type: "REQUEST_DETAIL_LOCATION_SUCCESS",
        data: detailLocation.data,
      });
    } else {
      yield put({
        type: "REQUEST_DETAIL_LOCATION_FAIL",
        message: detailLocation.message,
      });
    }
  } catch (error) {
    yield put({
      type: "REQUEST_DETAIL_LOCATION_FAIL",
      message: error,
    });
  }
}

export default function* detailLocationSaga() {
  yield takeLatest("REQUEST_DETAIL_LOCATION", requestDetailLocation);
}

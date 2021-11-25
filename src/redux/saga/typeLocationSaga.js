import { put, takeLatest } from "@redux-saga/core/effects";
import { getTypeLocation } from "../../api";
import { prosesTypeLocation } from "../../helper/helper";

function* requestTypeLocation(action) {
  try {
    const tipeLocation = yield getTypeLocation();
    if (tipeLocation.status === 'success') {
      const typeLocationProcessed = yield prosesTypeLocation(tipeLocation.data);
      yield put({
        type: "REQUEST_TYPE_LOCATION_SUCCESS",
        data: typeLocationProcessed,
      });
    } else {
      yield put({
        type: "REQUEST_TYPE_LOCATION_FAIL",
        message: tipeLocation.message,
      });
    }
  } catch (error) {
    yield put({
      type: "REQUEST_TYPE_LOCATION_FAIL",
      message: error,
    });
  }
}

export default function* typeLocationSaga() {
  yield takeLatest("REQUEST_TYPE_LOCATION", requestTypeLocation);
}

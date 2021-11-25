import { put, takeLatest } from "@redux-saga/core/effects";
import { getFloor } from "../../api";

function* requestFloor(action) {
  try {
    const floor = yield getFloor(action.payload);
    if (floor.status === 'success') {
      yield put({
        type: "REQUEST_FLOOR_SUCCESS",
        data: floor.data,
      });
    } else {
      yield put({
        type: "REQUEST_FLOOR_FAIL",
        message: floor.message,
      });
    }
  } catch (error) {
    yield put({
      type: "REQUEST_FLOOR_FAIL",
      message: error,
    });
  }
}

export default function* floorSaga() {
  yield takeLatest("REQUEST_FLOOR", requestFloor);
}

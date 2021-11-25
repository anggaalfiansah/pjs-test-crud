import { put, takeLatest } from "@redux-saga/core/effects";
import { postTambahData } from "../../api";

function* requestTambahData(action) {
  try {
    const post = yield postTambahData(action.payload);
    if (post.status === "success") {
      yield put({
        type: "REQUEST_TAMBAH_DATA_SUCCESS",
        data: post.data,
        message: post.message,
      });
    } else {
      yield put({
        type: "REQUEST_TAMBAH_DATA_FAIL",
        message: post.message,
      });
    }
  } catch (error) {
    yield put({
      type: "REQUEST_TAMBAH_DATA_FAIL",
      message: error,
    });
  }
}

export default function* postSaga() {
  yield takeLatest("REQUEST_TAMBAH_DATA", requestTambahData);
}

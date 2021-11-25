import { put, takeLatest } from "@redux-saga/core/effects";
import { getProject } from "../../api";

function* requestProject() {
  try {
    const project = yield getProject();
    if (project.status === 'success') {
      yield put({
        type: "REQUEST_PROJECT_SUCCESS",
        data: project.data,
      });
    } else {
      yield put({
        type: "REQUEST_PROJECT_FAIL",
        message: project.message,
      });
    }
  } catch (error) {
    yield put({
      type: "REQUEST_PROJECT_FAIL",
      message: error,
    });
  }
}

export default function* projectSaga() {
  yield takeLatest("REQUEST_PROJECT", requestProject);
}

import {takeLatest, all} from 'redux-saga/effects'
import {
    LOGIN_REQUEST
} from "../constants/actionTypes"

import {loginRequest} from "./auth";

const root = function* root() {
    yield all([
        takeLatest(LOGIN_REQUEST, loginRequest)
    ])
}

export default root;
import {put, call} from 'redux-saga/effects';

import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../constants/actionTypes";
import authService from '../services/auth';
import {setToken} from "../utils/token";

export const loginRequest = function* loginRequest(params) {
    try {
        const res = yield call(authService.login, params.username, params.password);

        if (res.code === 0) {
            setToken(res.data);

            yield put({type: LOGIN_SUCCESS, token: res.data})
        } else {
            yield put({type: LOGIN_FAILURE, payload: res})
        }
    }
    catch (e) {

    }
}
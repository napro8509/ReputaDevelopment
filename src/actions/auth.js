import {
    LOGIN_REQUEST,
    LOGOUT
} from "../constants/actionTypes";

export const login = (username, password) => {
    return {
        type: LOGIN_REQUEST,
        username,
        password
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}
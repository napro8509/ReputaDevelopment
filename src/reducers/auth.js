import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "../constants/actionTypes";

const initState = {
    loggedIn: false,
    token: null,
    isAuthenticating: false,
    message: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticating: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                loggedIn: true,
                token: action.token
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                loggedIn: false,
                message: action.message
            }
        default:
            return state;
    }
}
import {
    LOGIN, LOGOUT
} from '../constants';

export function login(credentials) {
    return (dispatch, getState, avanza) => {
        avanza.authenticate(credentials).then(authentication => {
            dispatch(loggedIn(authentication))
        }).catch(e => console.warn(e))
    }
}

export function loggedIn(authentication) {
    return {
        type: LOGIN,
        securityToken: authentication.securityToken,
        authenticationSession: authentication.authenticationSession,
        subscriptionId: authentication.subscriptionId,
        authenticated: true
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
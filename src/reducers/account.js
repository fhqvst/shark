import {
    LOGIN, LOGOUT
} from '../constants';

export default function account(state = {
    securityToken: '',
    authenticationSession: '',
    subscriptionId: '',
    authenticated: false
}, action) {

    switch(action.type) {
        case LOGIN:
            return {
                securityToken: action.securityToken,
                authenticationSession: action.authenticationSession,
                subscriptionId: action.subscriptionId,
                authenticated: action.authenticated
            }

        case LOGOUT: {
            return {
                securityToken: '',
                authenticationSession: '',
                subscriptionId: '',
                authenticated: false
            }
        }

        default:
            return state

    }
}
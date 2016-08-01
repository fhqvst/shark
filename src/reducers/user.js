import {
    LOGIN, LOGOUT
} from '../constants';
import { REHYDRATE } from 'redux-persist/constants';

export default function user(state = {
    securityToken: '',
    authenticationSession: '',
    subscriptionId: '',
    authenticated: false,
    timestamp: false
}, action) {

    switch(action.type) {
        case LOGIN:
            return {
                securityToken: action.securityToken,
                authenticationSession: action.authenticationSession,
                subscriptionId: action.subscriptionId,
                authenticated: action.authenticated,
                timestamp: action.timestamp
            }

        case LOGOUT: {
            return {
                securityToken: '',
                authenticationSession: '',
                subscriptionId: '',
                authenticated: false,
                timestamp: null
            }
        }

        default:
            return state

    }
}
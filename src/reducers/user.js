import {
    LOGIN, LOGOUT, METADATA
} from '../constants';
import { REHYDRATE } from 'redux-persist/constants';

export default function user(state = {
    securityToken: '',
    authenticationSession: '',
    subscriptionId: '',
    authenticated: false,
    timestamp: false,
    metadata: {}
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

        case METADATA: {
            return Object.assign({}, state, {
                metadata: action.metadata
            })
            
        }

        default:
            return state

    }
}
import {
    AUTHENTICATED, LOGOUT
} from '../constants';

export default function auth(state = {
    securityToken: '',
    authenticationSession: '',
    subscriptionId: '',
    authenticated: false
}, action) {
    return state
}
import {
    LOGIN, LOGOUT, INVALID_SESSION, METADATA
} from '../constants';

export function initUser() {
    return (dispatch, getState) => {
        if(new Date().getTime() - store.getState().user.timestamp > (86400 * 1000)) {
            dispatch(logout())
        }
    }
}

export function authenticateUser(credentials) {
    return (dispatch, getState, {avanza}) => {
        avanza.authenticate(credentials).then(authentication => {
            dispatch(receiveAuthenticatedUser(authentication))
        }).catch(e => console.warn(e))
    }
}

export function receiveAuthenticatedUser(authentication) {
    return {
        type: LOGIN,
        securityToken: authentication.securityToken,
        authenticationSession: authentication.authenticationSession,
        subscriptionId: authentication.subscriptionId,
        authenticated: true,
        timestamp: Date.now()
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function fetchOverview() {
    return (dispatch, getState, {avanza}) => {

        avanza.getOverview().then(overview => {

            dispatch(receiveUserMeta({
                accounts: overview.accounts,
                totalBalance: overview.totalBalance,
                totalOwnCapital: overview.totalOwnCapital,
                totalPerformance: overview.totalPerformance,
                totalPerformancePercent: overview.totalPerformancePercent
            }))

        }).catch(e => console.warn(e))
    }
}

export function receiveUserMeta(metadata) {
    return {
        type: METADATA,
        metadata: metadata
    }
}
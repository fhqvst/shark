import {
    LOGIN, LOGOUT, INVALID_SESSION, METADATA
} from '../constants';

export function login(credentials) {
    return (dispatch, getState, {avanza}) => {
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
        authenticated: true,
        timestamp: Date.now()
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function getOverview() {
    return (dispatch, getState, {avanza, queue}) => {

        avanza.getOverview().then(overview => {

            dispatch(gotMetadata({
                accounts: overview.accounts,
                totalBalance: overview.totalBalance,
                totalOwnCapital: overview.totalOwnCapital,
                totalPerformance: overview.totalPerformance,
                totalPerformancePercent: overview.totalPerformancePercent
            }))

        }).catch(e => console.warn(e))
    }
}

export function gotMetadata(metadata) {
    return {
        type: METADATA,
        metadata: metadata
    }
}
import * as React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Shark from './containers/Shark'
import localForage from 'localforage'
import reducers from './reducers';
import Avanza from 'avanza';
import Queue from 'promise-queue';
import {REHYDRATE} from 'redux-persist/constants'
import createActionBuffer from 'redux-action-buffer'
import { logout } from './actions/user';
import { createStore, applyMiddleware } from 'redux'
import { getStoredState, persistStore, autoRehydrate } from 'redux-persist'

const avanza = new Avanza();
const queue = new Queue();
const INITIALIZE = 'INITIALIZE'

const store = createStore(reducers,
    applyMiddleware(
        thunk.withExtraArgument({avanza, queue}),
        createLogger(),
        createActionBuffer(REHYDRATE)
    ), autoRehydrate())

const persistor = persistStore(store, {
    storage: localForage,
    // blacklist: ['search']
}, () => {

    console.log(store.getState());

    avanza.authenticationSession = store.getState().user.authenticationSession
    avanza.subscriptionId = store.getState().user.subscriptionId
    avanza.securityToken = store.getState().user.securityToken

    const timestamp = store.getState().user.timestamp;
    if(!timestamp || (Date.now() - timestamp > 86400)) {
        // store.dispatch(logout());
        console.log("LOGGED OUT");
    }

    store.dispatch({
        type: INITIALIZE
    });
})

render(
    <Provider store={store}>
        <Shark />
    </Provider>, document.getElementById('Shark'))
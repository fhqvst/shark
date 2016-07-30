import * as React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Shark from './containers/Shark'
import localForage from 'localforage'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'

const reducers = combineReducers({
    function(state = {}) {
        return state
    }
})
const store = createStore(reducers, applyMiddleware( thunk, createLogger()), autoRehydrate())

persistStore(store, {
    storage: localForage
})

render(
    <Provider store={store}>
        <Shark />
    </Provider>, document.getElementById('Shark'))
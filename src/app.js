import * as React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Shark from './components/Shark'
import localForage from 'localforage'
import reducers from './reducers';
import Avanza from 'avanza';
import Queue from 'promise-queue';
import { createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'

const store = createStore(reducers, applyMiddleware( thunk.withExtraArgument(new Avanza(), new Queue()), createLogger()), autoRehydrate())

persistStore(store, {
    storage: localForage
})

render(
    <Provider store={store}>
        <Shark />
    </Provider>, document.getElementById('Shark'))
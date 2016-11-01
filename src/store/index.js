import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import reducers from '../reducers'
import Avanza from 'avanza'
import Queue from 'promise-queue'
import { autoRehydrate } from 'redux-persist'


const avanza = new Avanza()
const queue = new Queue()

export function configureStore() {
    return createStore(
        combineReducers({
            ...reducers
        }),
        applyMiddleware(
            thunk.withExtraArgument({avanza, queue}),
            createLogger()
        ),
        autoRehydrate()
    )
}
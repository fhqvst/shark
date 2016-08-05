import React, { Component } from 'react'
import { render } from 'react-dom'
import { logout } from './actions/user'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import localforage from 'localforage';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import Shark from './containers/Shark';
import reducer from './reducers'
import Avanza from 'avanza'
import Queue from 'promise-queue'

const avanza = new Avanza();
const queue = new Queue();

const store = createStore(reducer,
    applyMiddleware(
        thunk.withExtraArgument({avanza, queue}),
        createLogger()
    ), autoRehydrate())

class AppProvider extends Component {

    constructor() {
        super()
        this.state = { rehydrated: false }
    }

    componentWillMount(){
        persistStore(store, {
            storage: localforage,
        }, () => {

            if(new Date().getTime() - store.getState().user.timestamp > (86400 * 1000)) {
                store.dispatch(logout())
            } else {
                avanza.authenticationSession = store.getState().user.authenticationSession
                avanza.subscriptionId = store.getState().user.subscriptionId
                avanza.securityToken = store.getState().user.securityToken
            }

            this.setState({ rehydrated: true })

        })
    }

    render() {
        if(!this.state.rehydrated){
            return false
        }
        return (
            <Provider store={store}>
                <Shark />
            </Provider>
        )
    }
}

render(
    <AppProvider />, document.getElementById('Shark'))
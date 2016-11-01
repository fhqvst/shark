import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Shark from './containers/Shark'
import { persistStore } from 'redux-persist'
import { configureStore } from './store'
import localforage from 'localforage';

const store = configureStore()

class AppProvider extends Component {

    constructor() {
        super()
        this.state = { rehydrated: false }
    }

    componentWillMount() {
        persistStore(store, { storage: localforage }, () => {
            this.setState({ rehydrated: true })
        })
    }

    render() {
        return this.state.rehydrated ?
            <Provider store={store}>
                <Shark />
            </Provider>
        : null
    }
}

render(<AppProvider />, document.getElementById('Shark'))
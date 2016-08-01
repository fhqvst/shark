import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/user';
import Login from './Login';
import Search from './Search';
import Metadata from './Metadata';
import Notifications from './Notifications';

class Shark extends Component {

    constructor() {
        this.state = { rehydrated: false }
    }

    componentWillMount(){
        persistStore(store, {}, () => {
            this.setState({ rehydrated: true })
        })
    }

    render() {
        if(!this.store.rehy)
        return this.props.user.authenticated ?
            <main>
                <div className="titlebar"></div>
                <header className="header">
                    <Search />
                    <Metadata />
                </header>
                <div className="content">
                    <div className="main">
                        <div className="tabs">
                            <div className="tabs__buttons">
                                <button className="button tabs__button is-active">Portfolio</button>
                                <button className="button tabs__button">Watchlist</button>
                            </div>
                            <div className="tabs__panes">
                                <div className="tabs__pane">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <Notifications />
                    </div>
                </div>
            </main> : <Login />
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps
)(Shark)
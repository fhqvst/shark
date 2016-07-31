import React, { Component } from 'react';
import Login from './Login';
import { connect } from 'react-redux'
import Notifications from './Notifications';

const Shark = ({ account }) => {
    return account.authenticated ?
        <main>
            <div className="titlebar"></div>
            <header className="header">
                <div className="search">
                    <input type="search" className="search__input" placeholder="Search..." />
                </div>
                <div className="meta">

                </div>
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

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

export default connect(
    mapStateToProps
)(Shark)
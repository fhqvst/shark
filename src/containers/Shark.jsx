import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import Search from './Search';
import Metadata from './Metadata';
import Notifications from './Notifications';
import MainTabs from './MainTabs';

class Shark extends Component {

    render() {

        return !this.props.user.authenticated ?
            <main>
                <div className="titlebar"></div>
                <header className="header">
                    <Search />
                    <Metadata />
                </header>
                <div className="content">
                    <div className="main">
                        <MainTabs />
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
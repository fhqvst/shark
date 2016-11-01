import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initUser } from '../actions/user'
import Login from './Login';

class Shark extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(initUser())
    }

    render() {
        return this.props.user.authenticated ?
            <main>
                <div className="titlebar"></div>
                <header className="header">
                </header>
                <aside className="sidebar">
                    <ul className="sidebar__nav">
                        <li className="sidebar__item">
                            <a href="#" className="sidebar__link"><i className="fa fa-book"></i> Analyze</a>
                        </li>
                        <li className="sidebar__item">
                            <a href="#" className="sidebar__link"><i className="fa fa-bar-chart"></i> Invest</a>
                        </li>
                    </ul>
                </aside>
                <div className="content">
                    <div className="analyzer">

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

export default connect(mapStateToProps)(Shark)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import Button from '../components/Button'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            loading: false
        }
    }

    render() {
        let { loading } = this.state;
        return (
            <form onSubmit={this.handleOnSubmit.bind(this)} className="login">
                <div className="login__content">
                    <img className="login__logo" src="assets/images/logo-white.svg" />
                    <p>
                        Shark is a trading terminal made to cancel the noise and let you focus on what's important.
                    </p>
                    <div className="login__username">
                        <input type="text" placeholder="Username" id="username" ref="username" />
                    </div>
                    <div className="login__password">
                        <input type="password" placeholder="Password" id="password" ref="password" />
                    </div>
                    <Button type="submit" className="login__submit" loading={loading}>Login</Button>
                </div>
            </form>
        )
    }

    handleOnSubmit(event) {

        event.preventDefault()

        this.state = {
            loading: true
        }

        this.forceUpdate()
        this.props.handleOnSubmit(event)
    }

}

const mapStateToProps = state => {
    return {}
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    handleOnSubmit: event => {
        dispatch(login({
            username: event.target.querySelector('#username').value,
            password: event.target.querySelector('#password').value
        }));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
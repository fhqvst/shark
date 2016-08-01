import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';

class Login extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleOnSubmit} className="login">
                <div className="login__content">
                    <h1 className="login__logo">Shark</h1>
                    <p>
                        Shark is a trading terminal made to cancel the noise and let you focus on what's important.
                    </p>
                    <div className="login__username">
                        <input type="text" placeholder="Username" id="username" ref="username" />
                    </div>
                    <div className="login__password">
                        <input type="password" placeholder="Password" id="password" ref="password" />
                    </div>
                    <input type="submit" className="button login__submit" value="Login" />
                </div>
            </form>
        )
    }

}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleOnSubmit: event => {
        event.preventDefault()
        dispatch(login({
            username: event.target.querySelector('#username').value,
            password: event.target.querySelector('#password').value
        }));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
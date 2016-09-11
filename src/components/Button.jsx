import React, { Component, Children } from 'react';

export default class Button extends Component {

    shouldComponentUpdate(props) {
        return this.props.loading !== props.loading
    }

    render() {
        return (
            <button
                type={ this.props.type || 'button' }
                className={'button ' + this.props.className + (this.props.loading ? ' is-loading' : '')}
                value={ this.props.value || 'Submit' }
            >{ this.props.children }</button>
        )
    }
}
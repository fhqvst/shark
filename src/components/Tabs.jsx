import React, { Component, Children } from 'react';
import _ from 'lodash';

export default class Tabs extends Component {

    constructor() {
        super()
        this.state = {
            active: 0
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            active: props.active
        })
    }

    onChangeTab(index, event) {
        this.props.onChangeTab(index, event);
    }

    onCloseTab(index, event) {
        event.stopPropagation()
        this.props.onCloseTab(index, event);
    }

    renderButton(label, index, key, closable) {
        let activeClass = 'button tabs__button' + (this.state.active === index ? ' is-active' : '');
        return (
            <button className={activeClass} onClick={this.onChangeTab.bind(this, index)} key={key}>
                {label}
                { closable ? <i className="button__close" onClick={this.onCloseTab.bind(this, index)}></i> : ''}
            </button>
        );
    }

    renderTitles() {
        return (
            <div className="tabs__buttons">
                <div className="tabs__group is-left">
                    {Children.map(this.props.children, (child, i) => {
                        return child.props.group === 'left' ? this.renderButton(child.props.label, i, i, !!child.props.closable) : '';
                    })}
                </div>
                <div className="tabs__group is-right">
                    {Children.map(this.props.children, (child, i) => {
                        return child.props.group === 'right' ? this.renderButton(child.props.label, i, i, !!child.props.closable) : '';
                    })}
                </div>
            </div>
        );
    }

    renderContent() {
        return Children.toArray(this.props.children)[this.state.active]
    }

    render() {
        return (
            <div className="tabs">
                {this.renderTitles()}
                {this.renderContent()}
            </div>
        )
    }
}
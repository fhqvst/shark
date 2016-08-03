import React, { Component, Children } from 'react';
import _ from 'lodash';

export default class Tabs extends Component {

    _onChangeTab(index, event) {
        this.props._onChangeTab(index, event);
    }

    _onCloseTab(index, event) {
        event.stopPropagation()
        this.props._onCloseTab(index, event);
    }

    _renderButton(label, index, closable) {
        let activeClass = 'button tabs__button' + (this.props.active === index ? ' is-active' : '');
        return (
            <button className={activeClass} onClick={this._onChangeTab.bind(this, index)} key={_.uniqueId('tabs__button')}>
                {label}
                { closable ? <i className="button__close" onClick={this._onCloseTab.bind(this, index)}></i> : ''}
            </button>
        );
    }

    _renderTitles() {
        return (
            <div className="tabs__buttons">
                <div className="tabs__group is-left">
                    {Children.map(this.props.children, (child, i) => {
                        return child && child.props.group === 'left' ? this._renderButton(child.props.label, i, child.props.closable) : false;
                    })}
                </div>
                <div className="tabs__group is-right">
                    {Children.map(this.props.children, (child, i) => {
                        return child && child.props.group === 'right' ? this._renderButton(child.props.label, i, child.props.closable) : false;
                    })}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="tabs">
                {this._renderTitles()}
                {Children.toArray(this.props.children)[this.props.active]}
            </div>
        )
    }
}
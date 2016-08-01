import React, { Component, Children } from 'react';
import _ from 'lodash';

export default class Tabs extends Component {

    constructor() {
        super()
        this.state = {
            active: 0
        }
    }

    handleOnClick(index) {
        console.log(index);
        this.setState({
            active: index
        })
    }

    renderButton(label, index, key) {
        let activeClass = 'button tabs__button' + (this.state.active === index ? ' is-active' : '');
        return (
            <button className={activeClass} onClick={this.handleOnClick.bind(this, index)} key={key}>
                {label}
            </button>
        );
    }

    renderTitles() {
        return (
            <div className="tabs__buttons">
                <div className="tabs__group is-left">
                    {Children.map(this.props.children, (child, i) => {
                        return !child.props.focus ? this.renderButton(child.props.label, i, i) : '';
                    })}
                </div>
                <div className="tabs__group is-right">
                    {Children.map(this.props.children, (child, i) => {
                        return child.props.focus ? this.renderButton(child.props.label, i, i) : '';
                    })}
                </div>
            </div>
        );
    }

    renderContent() {
        return Children.toArray(this.props.children)[this.state.active]
    }

    render() {
        // let active = this.state.active;
        return (
            <div className="tabs">
                {this.renderTitles()}
                {this.renderContent()}
            </div>
        )
    }
}
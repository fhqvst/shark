import React, {Component} from 'react';
export default class TabsButton extends Component {

    constructor() {
        super()
        this.state = {
            active: false
        }
    }

    render() {
        return <button className={"button tabs__button" + (this.state.active ? ' is-active' : '')} onClick={this.props.onClick}>{ this.props.children }</button>
    }
}
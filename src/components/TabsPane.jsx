import React, { Component } from 'react';

export default class TabsPane extends Component {

    constructor() {
        super()
        this.state = {
            active: false
        }
    }

    render() {
       return  (
           <div className={"tabs__pane" + (this.state.active ? ' is-active' : '')}>
                { this.props.children }
            </div>
       )
    }

}
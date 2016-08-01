import React, { Component } from 'react';

export default class TabsPane extends Component {

    render() {
       return  (
           <div className="tabs__pane">
                { this.props.children }
           </div>
       )
    }

}
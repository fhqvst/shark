import React, { Component, cloneElement } from 'react';
export default class Tabs extends Component {

    constructor() {
        super()
        this.state = {
            active: 0
        }
    }

    onClick(e) {
        console.log(e.target);
    }

    render() {
        return <div className="tabs">
            {
                React.Children.map(this.props.children, (child, i) => cloneElement(child, {
                    onClick: this.onClick,
                    key: 'tabs' + i
                }, child.props.children))
            }
        </div>
    }
}
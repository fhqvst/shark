import React, { Component } from 'react';
import _ from 'lodash';

export default class Grid extends Component {

    render() {
        return <div className="grid">
            { this.props.items ? this.props.items.map((item, index) =>
                <div className="grid__item" key={_.uniqueId('grid')}>
                    {item}
                </div>
            ) : false }
        </div>
    }

}
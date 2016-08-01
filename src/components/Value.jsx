import React, {Component} from 'react';

export default class Value extends Component {

    render() {

        const {colorize, value, unit} = this.props;
        const displayValue = value ? value.toLocaleString() : '';

        return (
            <div className={"value" + (colorize !== false ? value > 0 ? " is-positive" : value < 0 ? " is-negative" : "" : "") + ' ' + this.props.className}>
                {displayValue}
                <sup>{unit}</sup>
            </div>
        )
    }

}
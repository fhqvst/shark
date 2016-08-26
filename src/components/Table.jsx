import React, { Component, Children } from 'react';
import _ from 'lodash';

export default class Table extends Component {

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        {this.props.columns ? _.map(this.props.columns, (label, key) => (
                            <th key={'th' + key}>{label}</th>
                        )) : false }
                    </tr>
                </thead>
                <tbody>
                    {this.props.data ? _.map(this.props.data, (row, index) => (
                        <tr key={'tr' + index}>
                            {this.props.columns ? _.map(this.props.columns, (label, key) => (
                                <td key={'td' + key + index}>{ row[key] }</td>
                            )) : false }
                        </tr>
                    )) : false }
                </tbody>
            </table>
        )
    }
}
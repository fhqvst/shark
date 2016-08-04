import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOverview } from '../actions/user';
import Value from '../components/Value';

class Metadata extends Component {

    componentDidMount() {
        // this.props.dispatch(getOverview())
    }

    render() {
        return this.props.user.metadata ?
            <div className="metadata">
                <div className="metadata__item">
                    <span className="metadata__title">Total Balance</span>
                    <Value className="metadata__value" value={this.props.user.metadata.totalBalance} unit="SEK" colorize={true} />
                </div>
                <div className="metadata__item">
                    <span className="metadata__title">Total Capital</span>
                    <Value className="metadata__value" value={this.props.user.metadata.totalOwnCapital} unit="SEK" colorize={true} />
                </div>
                <div className="metadata__item">
                    <span className="metadata__title">Performance</span>
                    <Value className="metadata__value" value={this.props.user.metadata.totalPerformance} unit="SEK" colorize={true} />
                </div>
            </div> : false
    }

}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps
)(Metadata);
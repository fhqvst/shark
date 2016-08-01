import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOverview } from '../actions/user';
import Value from '../components/Value';
import _ from 'lodash';

class Metadata extends Component {

    componentDidMount() {
        this.props.dispatch(getOverview())
    }

    render() {
        return this.props.user.totalBalance ?
            <div className="metadata">
                <Value className="metadata__value" value={this.props.user.totalBalance} unit="SEK" colorize={true} />
            </div> : false
    }

}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps
)(Metadata);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';

class Focus extends Component {

    componentDidMount() {
    }

    render() {
        return this.props.instrument ?

            <div className="focus__wrapper">
                <Loader />
            </div>

        : <Loader />
    }

}

const mapStateToProps = state => ({
    positions: state.positions,
    user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Focus);
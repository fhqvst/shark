import React, { Component } from 'react';
import { connect } from 'react-redux';
class Focus extends Component {

    componentDidMount() {
    }

    render() {
        return this.props.instrument ?

            <div className="focus__wrapper">
                <h1 className="focus__title">
                    { this.props.instrument._name }
                </h1>
            </div>

        : false
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFocusTab, openFocusTab } from '../actions/focus';
import Instrument from '../components/Instrument';
import Grid from '../components/Grid';
import _ from 'lodash'

class InstrumentGrid extends Component {

    render() {
        return this.props.positions ?

            <Grid items={ this.props.positions.map(position => {

            const instrument = _.find(this.props.instruments, {_id: position._instrumentId});
            return instrument ?
                <Instrument instrument={instrument} onDoubleClick={this.props.handleOnDoubleClick.bind(this, instrument)} />
            : false }

            )} />

        : false
    }

}

const mapStateToProps = state => ({
    tabs: state.tabs,
    positions: state.positions,
    instruments: state.instruments
});

export default connect(
    mapStateToProps,
    null,
    (stateProps, dispatchProps, ownProps) => {

        let newProps = Object.assign({}, stateProps, dispatchProps, ownProps)

        newProps.handleOnDoubleClick = instrument => {
            if(_.find(newProps.focuses, focus => focus === instrument._id)) {
                dispatchProps.dispatch(openFocusTab(instrument._id));
            } else {
                dispatchProps.dispatch(addFocusTab(instrument._id));
            }
        }

        return newProps;
    }
)(InstrumentGrid);
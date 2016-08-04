import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTab, openFocusTab } from '../actions/tabs';
import Instrument from '../components/Instrument';
import Grid from '../components/Grid';
import _ from 'lodash'

class InstrumentGrid extends Component {

    render() {
        const handleOnDoubleClick = this.props.handleOnDoubleClick;
        return this.props.positions ?

            <Grid items={ this.props.positions.map(position => {

                const instrument = _.find(this.props.instruments, {id: position.instrumentId});
                return instrument ?
                    <Instrument instrument={instrument} onDoubleClick={handleOnDoubleClick.bind(this, instrument)} />
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
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { tabs } = stateProps;
    const { dispatch } = dispatchProps;

    return {
        ...ownProps,
        ...stateProps,
        handleOnDoubleClick: instrument => {
            if(_.find(tabs.items, tab => tab.instrumentId === instrument.id)) {
                dispatch(openFocusTab(instrument.id));
            } else {
                dispatch(addTab({
                    type: 'focus',
                    label: instrument.name,
                    instrumentId: instrument.id
                }));
            }
        }
    }
}

export default connect(
    mapStateToProps,
    null,
    mergeProps
)(InstrumentGrid);
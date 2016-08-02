import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPortfolio } from '../actions/positions';
import { addFocusTab, openFocusTab } from '../actions/focus';
import Instrument from '../components/Instrument';
import _ from 'lodash'

class InstrumentGrid extends Component {

    componentDidMount() {
        // this.props.dispatch(getPortfolio())
    }

    render() {
        return this.props.instruments ?

            <div className="instruments__grid">
                { this.props.instruments.map(instrument => (
                    <div className="instruments__item" key={'instrumentGrid' + instrument._id} onDoubleClick={this.props.handleOnDoubleClick.bind(this, instrument)}>
                        <Instrument instrument={instrument} />
                    </div>
                ))}
            </div>

        : false
    }

}

const mapStateToProps = state => ({
    focuses: state.focuses.instruments,
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
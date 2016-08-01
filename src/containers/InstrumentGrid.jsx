import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPortfolio } from '../actions/positions';
import { openFocusTab } from '../actions/focus';
import Instrument from '../components/Instrument';

class InstrumentGrid extends Component {

    componentDidMount() {
        // this.props.dispatch(getPortfolio())
    }



    render() {
        return this.props.instruments ?

            <div className="instruments__grid">
                { this.props.instruments.map(instrument => (
                    <div className="instruments__item" key={'instrumentGrid' + instrument.id} onDoubleClick={this.props.handleOnDoubleClick.bind(this, instrument)}>
                        <Instrument instrument={instrument} />
                    </div>
                ))}
            </div>

        : false
    }

}

const mapStateToProps = state => ({
    positions: state.positions
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleOnDoubleClick(instrument) {
        dispatch(openFocusTab(instrument.id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InstrumentGrid);
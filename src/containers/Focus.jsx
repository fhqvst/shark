import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import InstrumentChart from '../components/InstrumentChart';

class Focus extends Component {

    render() {

        const instrument = this.props.instrument;
        const config = {
            series: [{
                data: instrument ? [instrument.lastPrice, instrument.lastPrice] : []
            }]
        };

        return (
            <div className="focus__wrapper">
                { instrument ?
                    <div className="focus__content">

                        <div className="focus__top">
                            <h1 className="focus__title">
                                { instrument.name }
                                <span className="focus__ticker">{ instrument.ticker }</span>
                            </h1>
                            <div className="focus__actions">
                                <button className="button focus__buy">Buy</button>
                                <button className="button focus__sell">Sell</button>
                            </div>
                        </div>

                        <div className="focus__items">
                            <div className="focus__item">
                                <div className="focus__chart">
                                    <InstrumentChart config={config} />
                                </div>
                            </div>
                            <div className="focus__item">
                                <div className="focus__placeholder">
                                    Orderbook
                                </div>
                            </div>
                            <div className="focus__item">
                                <div className="focus__placeholder">
                                    Latest trades
                                </div>
                            </div>
                            <div className="focus__item">
                                <div className="focus__placeholder">
                                    Instrument data
                                </div>
                            </div>
                            <div className="focus__item">
                                <div className="focus__placeholder">
                                    Broker data
                                </div>
                            </div>
                            <div className="focus__item">
                                <div className="focus__placeholder">
                                    Positions
                                </div>
                            </div>
                        </div>

                    </div>
                    : <Loader />
                }
            </div>
        )
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
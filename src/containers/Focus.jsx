import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChartdata } from '../actions/chartdata';
import Loader from '../components/Loader';
import InstrumentChart from '../components/InstrumentChart';
import makeGetInstrumentChartdata from '../selectors/chartdata'

class Focus extends Component {
    
    componentDidMount() {
        setTimeout(() => {
            this.props.dispatch(getChartdata(this.props.instrument.id, 'today'));
        }, 1000)
    }

    componentWillReceiveProps(nextProps) {
        // todo: This isn't executed upon receiving chart data. Might have something to do with Reselect.
        this.refs.chart.getChart().series[0].setData(
            nextProps.chartdata.data.today ? nextProps.chartdata.data.today : []
        )
    }
    
    render() {

        console.log("Rendering this");

        const instrument = this.props.instrument;
        const config = {
            series: [{
                data: this.props.chartdata.data.today ? this.props.chartdata.data.today : []
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

                        <div className="focus__chart">
                            <InstrumentChart config={config} ref="chart" />
                        </div>

                        <div className="focus__items">
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
                            <div className="focus__item">
                                <div className="focus__placeholder">
                                    Twitter feed
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

const makeMapStateToProps = () => {
    return (state, props) => {
        return {
            positions: state.positions,
            user: state.user,
            chartdata: makeGetInstrumentChartdata()(state, props)
        }
    }
}

export default connect(
    makeMapStateToProps
)(Focus);
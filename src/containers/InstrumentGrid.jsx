import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class InstrumentGrid extends Component {

    componentDidMount() {
        let chart = this.refs.chart.getChart();
        setInterval(() => {
            let rand = 22.56 + 10 * Math.random()
            chart.series[0].setData([rand, rand], false);
            chart.redraw();
        }, 1000);
    }

    render() {

        var config = {
            series: [{
                name: 'AAPL',
                data: [22.56, 22.56],
                tooltip: false
            }]
        };

        return <div className="instruments">
            <Chart config={config} ref="chart" />
        </div>
    }

}

const mapStateToProps = state => ({
    instruments: state.instruments
});

export default connect(
    mapStateToProps
)(InstrumentGrid);
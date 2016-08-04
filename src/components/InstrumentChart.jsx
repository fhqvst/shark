import React, { Component } from 'react';

import Highcharts from 'highcharts';

export default class Chart extends Component {

    getChart() {
        if (!this.chart) {
            throw new Error('getChart() should not be called before the component is mounted');
        }
        return this.chart;
    }

    componentDidMount() {

        const defaults = {
            chart: {
                spacingBottom: 10,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
                height: 400,
                width: 600
            },
            labels: {
                align: 'right',
                x: 0
            },
            title: false,
            yAxis: {
                title: false,
                tickPixelInterval: 26
            },
            legend: {
                enabled: false
            },
            credits: false
        }

        this.chart = new Highcharts.Chart(
            this.refs.chart,
            Object.assign({}, defaults, this.props.config)
        )

    }

    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {
        return (
            <div ref="chart"></div>
        )
    }
    
}
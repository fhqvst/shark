import React, { Component } from 'react';

import Highstock from 'highcharts/highstock';

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
                zoomType: 'xy'
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

        this.chart = new Highstock.Chart(
            this.refs.chart,
            Object.assign({}, defaults, this.props.config)
        )

        if(this.props.onLoad) { this.props.onLoad() }

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
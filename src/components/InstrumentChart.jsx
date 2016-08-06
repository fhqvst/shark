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
                spacingBottom: 20,
                spacingTop: 20,
                spacingLeft: 20,
                spacingRight: 0,
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
            xAxis: {
                type: 'datetime',
                gridLineWidth: 1,
                minorTickWidth: 1,
                minorTickInterval: 'auto'
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
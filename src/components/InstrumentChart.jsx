import React, { Component } from 'react';
import Highstock from 'highcharts/highstock';
import Pan from '../helpers/highstocks-pan';

Pan(Highstock)

export default class Chart extends Component {

    getChart() {
        if (!this.chart) {
            throw new Error('getChart() should not be called before the component is mounted');
        }
        return this.chart;
    }

    componentDidMount() {

        const data = this.props.config.series[0].data
        const defaults = {
            chart: {
                spacingBottom: 20,
                spacingTop: 20,
                spacingLeft: 20,
                spacingRight: 0,
                zoomType: 'xy',
                panning: true,
                panKey: 'shift'
            },
            labels: {
                align: 'right',
                x: 0
            },
            title: false,
            yAxis: {
                title: false,
                tickPixelInterval: 26,
                startOnTick: false,
                endOnTick: false
            },
            xAxis: {
                type: 'datetime',
                gridLineWidth: 1,
                minorTickWidth: 1,
                minorTickInterval: 'auto',
                max: data[data.length - 1].x + 60 * 60 * 1000
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                line: {
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    }
                }
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
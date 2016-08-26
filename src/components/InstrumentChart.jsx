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
                spacingBottom: 0,
                spacingTop: 0,
                spacingLeft: 0,
                spacingRight: 0,
                zoomType: 'xy',
                panning: true,
                panKey: 'shift',
                style: {
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold'
                }
            },
            title: false,
            yAxis: {
                title: false,
                tickPixelInterval: 60,
                startOnTick: false,
                endOnTick: false,
                labels: {
                    align: 'left',
                    x: 20
                }
            },
            xAxis: {
                type: 'datetime',
                gridLineWidth: 1,
                minorTickWidth: 1,
                minorTickInterval: 'auto',
                min: data[0].x - 60 * 60 * 1000,
                max: data[data.length - 1].x + 60 * 60 * 1000,
                labels: {
                    align: 'left',
                    x: 10,
                    y: -20
                },
                lineWidth: 0,
                lineColor: 'red',
                tickLength: 0
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
            tooltip: {
                crosshairs: {
                    dashStyle: 'solid',
                    color: '#1e99a8'
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
        if(this.chart) {
            this.chart.destroy();
        }
    }

    render() {
        return (
            <div ref="chart"></div>
        )
    }
    
}
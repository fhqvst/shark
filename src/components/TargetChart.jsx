import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Pan from '../helpers/highstocks-pan';

Pan(Highcharts)

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
                spacingLeft: 0,
                spacingRight: 0,
                height: 240,
                zoomType: 'y',
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
                min: this.props.config.series[0].data[0] / 3,
                max: 1.5 * this.props.config.series[0].data[0],
                endOnTick: false,
                startOnTick: false,
                tickPixelInterval: 26
            },
            xAxis: {
                visible: false
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            credits: false,
            plotOptions: {
                series: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    animation: false,
                },
                line: {
                    marker: {
                        enabled: false
                    }
                }
            }
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
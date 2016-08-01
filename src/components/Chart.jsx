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
            title: false,
            yAxis: {
                title: false,
                min: 0,
                max: 2 * this.props.config.series[0].data[0],
                endOnTick: false,
                startOnTick: false
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
                    }
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

        let downYPixels,
            downYValue,
            hasDragged = 0,
            isDragging = false,
            yAxis = this.chart.yAxis[0],
            chart = this.chart;

        Highcharts.addEvent(this.refs.chart, 'mousedown', function (e) {

            chart.pointer.zoomY = chart.pointer.zoomVert = chart.pointer.hasZoom = e.shiftKey;

            if(e.shiftKey) {
                chart.pointer.onContainerMouseDown(e);
            } else {

                downYPixels = chart.pointer.normalize(e).chartY;
                downYValue = yAxis.toValue(downYPixels);
                isDragging = true;

            }

        });

        Highcharts.addEvent(this.refs.chart, 'mousemove', function (e) {
            if (isDragging) {
                var dragYPixels = chart.pointer.normalize(e).chartY,
                    dragYValue = yAxis.toValue(dragYPixels),

                    yExtremes = yAxis.getExtremes(),

                    yUserMin = yExtremes.min,
                    yUserMax = yExtremes.max,
                    yDataMin = yExtremes.dataMin,
                    yDataMax = yExtremes.dataMax,

                    yMin = yUserMin !== undefined ? yUserMin : yDataMin,
                    yMax = yUserMax !== undefined ? yUserMax : yDataMax,

                    newMinY,
                    newMaxY;

                hasDragged = Math.abs(downYPixels - dragYPixels);

                if (hasDragged > 10) {

                    newMinY = yMin - (dragYValue - downYValue);
                    newMaxY = yMax - (dragYValue - downYValue);

                    if(newMinY > -10) {
                        yAxis.setExtremes(newMinY, newMaxY, true, false);
                    }

                }
            }
        });

        Highcharts.addEvent(this.refs.chart, 'mouseup', function (e) {
            if (isDragging) {
                isDragging = false;
            }
        });

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
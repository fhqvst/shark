import React, { Component } from 'react';

import Chart from './Chart';
import Value from './Value';

export default class Instrument extends Component {

    render() {

        const { instrument } = this.props;
        const config = {
            series: [{
                data: instrument ? [instrument._lastPrice, instrument._lastPrice] : []
            }]
        };

        return instrument ?
            <div className="instrument">
                <div className="instrument__top">
                    <span className="instrument__name">{instrument._name}</span>
                    <span className="instrument__price">
                        <Value value={instrument._lastPrice} unit={instrument.currency} colorize={false} />
                    </span>
                </div>
                <div className="instrument__top">
                    <span className="instrument__date">{ new Date(instrument._lastPriceUpdated).toLocaleTimeString() }</span>
                    <span className="instrument__change">
                        <Value value={instrument._changePercent} unit="%" />
                    </span>
                </div>
                <Chart config={config} />
            </div>
            : <div></div>

    }

}
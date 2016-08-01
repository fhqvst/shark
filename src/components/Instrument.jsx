import React, { Component } from 'react';

import Chart from './Chart';
import Value from './Value';

export default class Instrument extends Component {

    render() {

        const { instrument } = this.props;
        const config = {
            series: [{
                data: instrument ? [instrument.lastPrice, instrument.lastPrice] : []
            }]
        };

        return instrument ?
            <div className="instrument">
                <div className="instrument__top">
                    <span className="instrument__name">{instrument.name}</span>
                    <span className="instrument__price">
                        <Value value={instrument.lastPrice} unit={instrument.currency} colorize={false} />
                    </span>
                </div>
                <div className="instrument__top">
                    <span className="instrument__date">{ new Date(instrument.lastPriceUpdated).toLocaleTimeString() }</span>
                    <span className="instrument__change">
                        <Value value={instrument.changePercent} unit="%" />
                    </span>
                </div>
                <Chart config={config} />
            </div>
            : <div></div>

    }

}
import { GET_CHARTDATA, ADD_INSTRUMENT } from '../constants';
import _ from 'lodash';

export default function(state = [], action) {

    switch (action.type) {

        case ADD_INSTRUMENT:
            let chartdata = {
                instrumentId: action.instrument.id,
                data: {}
            }
            return [...state, chartdata]

        case GET_CHARTDATA:
            return state.map(chartdata => {
                if(chartdata.instrumentId === action.instrumentId) {
                    let newData = Object.assign({}, chartdata);
                    newData.data[action.period] = action.data
                    return newData;
                }
                return chartdata;
            })

        default:
            return state
    }

}
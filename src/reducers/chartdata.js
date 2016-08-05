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
            let index = _.findIndex(state, {instrumentId: action.instrumentId});
            let currentState = [...state];

            if(index > -1) {
                currentState[index].data[action.period] = action.data;
            }
            return currentState;

        default:
            return state
    }

}
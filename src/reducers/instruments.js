import { RECEIVE_INSTRUMENT, RECEIVE_QUOTE } from '../constants';
import _ from 'lodash';

export default function(state = [], action) {

    switch (action.type) {

        case RECEIVE_INSTRUMENT:
            return [
                ...state,
                action.instrument
            ];

        case RECEIVE_QUOTE:
            let index = _.findIndex(state, {id: action.instrument.id});
            let instruments = [...state];

            instruments[index] = action.instrument;

            return instruments;

        default:
            return state
    }

}
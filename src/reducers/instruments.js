import { ADD_INSTRUMENT } from '../constants';
import _ from 'lodash';

export default function(state = [], action) {

    switch (action.type) {

        case ADD_INSTRUMENT:
            let index = _.findIndex(state, {id: action.instrument._id});
            if(index > -1) {
                let instruments = [...state];
                instruments[index] = action.instrument;
                return instruments;
            }
            return [...state, action.instrument];

        default:
            return state
    }

}
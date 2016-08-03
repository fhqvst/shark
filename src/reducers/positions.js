import { ADD_POSITION } from '../constants';
import _ from 'lodash';

export default function(state = [], action) {

    switch (action.type) {

        case ADD_POSITION:

            let index = _.findIndex(state, {_instrumentId: action.position._instrumentId});
            if(index > -1) {
                let positions = [...state];
                positions[index] = action.position;
                return positions;
            }
            return [...state, action.position];

        default:
            return state
    }

}
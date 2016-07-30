import { REQUEST_POSITIONS, RECEIVE_POSITIONS } from '../constants';

export default function(state = [], action) {

    switch (action.type) {

        case REQUEST_POSITIONS:
            return state;
            break;

        case RECEIVE_POSITIONS:
            return [...action.positions];

        default:
            return state
    }

}
import { ADD_POSITION } from '../constants';

export default function(state = [], action) {

    switch (action.type) {

        case ADD_POSITION:
            return [...action.position];

        default:
            return state
    }

}
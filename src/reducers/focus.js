import { OPEN_FOCUS_TAB, CLOSE_FOCUS_TAB } from '../constants';
import _ from 'lodash';

export default function(state = [], action) {

    switch (action.type) {

        case OPEN_FOCUS_TAB:
            return [
                ...state,
                action.id
            ];

        case CLOSE_FOCUS_TAB:
            return state

        default:
            return state
    }

}
import { ADD_FOCUS_TAB, OPEN_FOCUS_TAB, CLOSE_FOCUS_TAB } from '../constants';
import _ from 'lodash';

export default function(state = {
    instruments: [],
    active: 0
}, action) {

    switch (action.type) {

        // todo: Add some behaviour which separates ADDing and OPENing tabs.
        case ADD_FOCUS_TAB:
            return {
                instruments: [...state.instruments, action.instrumentId],
                active: action.instrumentId
            }

        case OPEN_FOCUS_TAB:
            return {
                instruments: state.instruments,
                active: action.instrumentId
            }

        case CLOSE_FOCUS_TAB:
            return {
                instruments: _.filter(state.instruments, instrument => (instrument !== action.instrumentId)),
                active: state.active
            }

        default:
            return state
    }

}
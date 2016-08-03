import { ADD_TAB, ACTIVATE_TAB, CLOSE_TAB } from '../constants';
import { addedInstrument } from './instruments';
import _ from 'lodash'

export function openFocusTab(id) {
    return {
        type: ACTIVATE_TAB,
        instrumentId: id
    }
}

export function addFocusTab(id) {
    return (dispatch, getState, {avanza, queue}) => {
        if(!_.find(getState().instruments, instrument => instrument._id === id)) {
            queue.add(() => avanza.getStock(id))
                .then(instrument => {
                    dispatch(addedInstrument(instrument));
                    dispatch(addedFocusTab(id))
                    dispatch(openFocusTab(id));
                }).catch(e => console.error(e))
        } else {
            dispatch(addedFocusTab(id))
            dispatch(openFocusTab(id));
        }
    }
}

export function addedFocusTab(id) {
    return {
        type: ADD_TAB,
        instrumentId: id
    }
}

export function closeFocusTab(id) {
    return {
        type: CLOSE_TAB,
        instrumentId: id
    }
}
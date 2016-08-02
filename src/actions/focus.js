import { ADD_FOCUS_TAB, OPEN_FOCUS_TAB, CLOSE_FOCUS_TAB } from '../constants';

export function openFocusTab(id) {
    return {
        type: OPEN_FOCUS_TAB,
        instrumentId: id
    }
}

export function addFocusTab(id) {
    return (dispatch, getState) => {
        dispatch(addedFocusTab(id))
        dispatch(openFocusTab(id));
    }
}

export function addedFocusTab(id) {
    return {
        type: ADD_FOCUS_TAB,
        instrumentId: id
    }
}

export function closeFocusTab(id) {
    return {
        type: CLOSE_FOCUS_TAB,
        instrumentId: id
    }
}
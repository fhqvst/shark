import { ADD_TAB, ACTIVATE_TAB, CLOSE_TAB } from '../constants';
import { addedInstrument } from './instruments';
import _ from 'lodash'

export function openedTab(index) {
    return {
        type: ACTIVATE_TAB,
        index: index
    }
}

export function openTab(identifier) {

    return (dispatch, getState) => {
        const tabs = getState().tabs.items;

        let index;
        if(typeof identifier === 'string') {
            index = openedTab(_.findIndex(tabs, {label: identifier}))
        } else if(typeof identifier === 'number') {
            index = identifier
        }

        if(index > -1) {
            dispatch(openedTab(index));
        }

    }

}

export function addTab(tab) {
    return (dispatch, getState, {avanza, queue}) => {

        switch (tab.type) {

            case 'focus':
                if(!_.find(getState().instruments, instrument => instrument.id === tab.instrumentId)) {
                    queue.add(() => avanza.getStock(id))
                        .then(instrument => {
                            dispatch(addedInstrument(instrument));
                            dispatch(addedTab(tab))
                            dispatch(openFocusTab(tab.instrumentId));
                        }).catch(e => console.error(e))
                } else {
                    dispatch(addedTab(tab));
                    dispatch(openFocusTab(tab.instrumentId));
                }
                break;

            default:
                dispatch(addedTab(tab));
                dispatch(openedTab(tab.label))

        }
    }
}

export function addedTab(tab) {
    return {
        type: ADD_TAB,
        tabType: tab.type,
        label: tab.label,
        instrumentId: tab.instrumentId
    }
}

export function closeTab(index) {
    return {
        type: CLOSE_TAB,
        index: index
    }
}

export function openFocusTab(instrumentId) {
    return (dispatch, getState) => {
        const tabs = getState().tabs.items;
        dispatch(openTab(_.findIndex(tabs, {instrumentId: instrumentId})))
    }
}

export function closeFocusTab(instrumentId) {
    return (dispatch, getState) => {
        const tabs = getState().tabs.items;
        dispatch(closeTab(_.findIndex(tabs, {instrumentId: instrumentId})))
    }
}


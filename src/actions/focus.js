import { OPEN_FOCUS_TAB } from '../constants';

export function openFocusTab(id) {
    return {
        type: OPEN_FOCUS_TAB,
        id: id
    }
}
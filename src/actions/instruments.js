import { ADD_INSTRUMENT } from '../constants';
import _ from 'lodash';

export function addedInstrument(instrument) {
    return {
        type: ADD_INSTRUMENT,
        instrument: instrument
    }
}

export function addInstrument(id) {
    return (dispatch, getState, {avanza, queue}) => {
        if(_.find(getState().instruments, instrument => instrument.id === id)) {
            queue.add(() => avanza.getStock(id))
            .then(instrument => {
                dispatch(addedInstrument(instrument));
            })
        }
    }
}
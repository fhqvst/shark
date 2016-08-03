import { ADD_POSITION } from '../constants';
import { addInstrument } from './instruments';

export function getPortfolio() {
    return (dispatch, getState, {avanza, queue}) => {
        queue.add(() => avanza.getPositions())
            .then(positions => {

                positions.map(position => {
                    dispatch(addInstrument(position._instrumentId));
                    dispatch(addPosition(position));
                })

            }).catch(e => console.error(e))
    }
}

export function addPosition(position) {
    return {
        type: ADD_POSITION,
        position: position
    }
}
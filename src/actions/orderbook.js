import { ADD_ORDERBOOK, UPDATE_ORDERBOOK } from '../constants';
import STOCK from 'avanza/dist/constants'
import _ from 'lodash';

export function addOrderbook(instrumentId, levels) {
    return {
        type: ADD_ORDERBOOK,
        instrumentId: instrumentId,
        levels: levels
    }
}

export function updateOrderbook(instrumentId, levels) {
    return {
        type: UPDATE_ORDERBOOK,
        instrumentId: instrumentId,
        levels: levels
    }
}

export function getOrderbook(instrumentId, type = STOCK) {
    return (dispatch, getState, {avanza, queue}) => {
        if(!_.find(getState().orderbooks, orderbook => orderbook.instrumentId === instrumentId)) {
            queue.add(() => avanza.getOrderbook(instrumentId))
            .then(data => {
                dispatch(addOrderbook(instrumentId, data.levels));
            }).catch(e => console.error(e))
        }
    }
}
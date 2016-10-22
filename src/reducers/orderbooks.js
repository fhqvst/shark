import {
    ADD_ORDERBOOK, UPDATE_ORDERBOOK
} from '../constants';

export default function orderbooks(state = [], action) {

    switch(action.type) {

        case ADD_ORDERBOOK: {
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    instrumentId: action.instrumentId,
                    levels: action.levels
                },
                ...state
            ]

        }

        case UPDATE_ORDERBOOK: {
            return state.map(orderbook =>
                orderbook.instrumentId === action.instrumentId ? { ...orderbook, levels: action.levels } : orderbook
            )
        }

        default:
            return state

    }
}
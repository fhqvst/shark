import {
    ADD_ORDERBOOK, UPDATE_ORDERBOOK
} from '../constants';
import { REHYDRATE } from 'redux-persist/constants';

export default function orderbooks(state = [], action) {

    switch(action.type) {

        case ADD_ORDERBOOK: {
            return Object.assign({}, state, {
                metadata: action.metadata
            })
            
        }

        case UPDATE_ORDERBOOK: {

        }

        default:
            return state

    }
}
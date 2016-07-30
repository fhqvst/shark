import {
    CREATE_TARGET,
    UPDATE_TARGET,
    DELETE_TARGET
} from '../constants';
import _ from 'lodash';

export default function(state = [], action) {

    switch (action.type) {

        case CREATE_TARGET:
            return [...state, {
                id: state.length + '',
                sentiment: action.sentiment,
                instrumentId: action.instrumentId,
                price: action.price,
                note: action.note,
                date: action.date
            }];

        case UPDATE_TARGET:
            return state.map(target =>
                target.id === action.id ?
                    Object.assign({}, target, {
                        sentiment: action.sentiment ? action.sentiment : target.sentiment,
                        price: action.price ? action.price : target.price,
                        note: action.note ? action.note : target.note
                    }) : target
            )

        case DELETE_TARGET:
            return _.filter(state, target => (target.id !== action.id));

        default:
            return state

    }

}
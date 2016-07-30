import { CREATE_NOTIFICATION } from '../constants';

export default function(state = [
    {
        type: "ORDERBOOK_BUYER",
        id: 1,
        instrumentId: "5650",
        timestamp: "12:03:55 PM"
    },
    {
        type: "ORDERBOOK_SELLER",
        id: 2,
        instrumentId: "5470",
        timestamp: "12:04:12 PM"
    },
    {
        type: "TARGET_REACHED",
        id: 3,
        instrumentId: "5650",
        timestamp: "12:04:13 PM"
    }
], action) {

    switch (action.type) {
        
        case CREATE_NOTIFICATION:
            return [
                ...state,
                {
                    type: action.notificationType,
                    id: state.length + 1,
                    instrumentId: action.instrumentId
                }
            ];

        default:
            return state

    }

}
import { ADD_TAB, ACTIVATE_TAB, CLOSE_TAB } from '../constants';
import _ from 'lodash';

export default function(state = {
    items: [
        {
            type: 'portfolio',
            label: 'Portfolio'
        },
        {
            type: 'watchlist',
            label: 'Watchlist'
        }
    ],
    active: 0
}, action) {

    switch (action.type) {

        case ADD_TAB:

            switch(action.tabType) {

                case 'focus':
                    return {
                        items: [...state.items, {
                            type: action.tabType,
                            label: action.label,
                            instrumentId: action.instrumentId
                        }],
                        active: state.active
                    }

                default:
                    return {
                        items: [...state.items, {
                            type: action.tabType,
                            label: action.label,
                        }],
                        active: state.active
                    }


            }

        case ACTIVATE_TAB:
            return {
                items: state.items,
                active: action.index
            }

        case CLOSE_TAB:
            return {
                items: _.filter(state.items, (item, index) => (index !== action.index)),
                active: state.active
            }

        default:
            return state
    }

}
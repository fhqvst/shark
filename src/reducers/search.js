import { SEARCH, SEARCHED } from '../constants';

export default function search(state = {
    results: {},
    loading: false
}, action) {

    switch(action.type) {

        case SEARCH:
            return {
                results: state.results,
                loading: true
            }

        case SEARCHED:
            return {
                results: Object.assign({}, action.results),
                loading: false
            }

        default:
            return state

    }
}
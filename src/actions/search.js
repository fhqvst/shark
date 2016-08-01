import { SEARCH, SEARCHED } from '../constants'
import _ from 'lodash'

export function searched(results) {
    return {
        type: SEARCHED,
        results: results
    }
}

export function searching() {
    return {
        type: SEARCH
    }
}

export function search(query) {
    return (dispatch, getState, {avanza, queue}) => {

        if(query) {
            dispatch(searching());
            queue.add(() => avanza.search(query)).then(results => {
                let searchResults = {};

                if(results && results.hits) {
                    results.hits.map(result => {
                        if(result.topHits) {
                            result.topHits.map(hit => {
                                const instrumentType = result.instrumentType.toUpperCase()

                                if(!searchResults[instrumentType]) {
                                    searchResults[instrumentType] = []
                                }

                                searchResults[instrumentType].push(hit);

                            })
                        }
                    })
                }
                dispatch(searched(searchResults))
            })
        } else {
            dispatch(searched({}));
        }
    }
}
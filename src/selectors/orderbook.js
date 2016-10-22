import { createSelector } from 'reselect'
import _ from 'lodash'

const getOrderbook = (state, props) => _.find(state.orderbooks, {instrumentId: props.instrumentId})

export default () => {
    return createSelector(
        [ getOrderbook ],
        orderbook => {
            return orderbook
        }
    )
}
import { createSelector } from 'reselect'
import _ from 'lodash'

const getChartdata = (state, props) => _.find(state.chartdata, {instrumentId: props.instrument.id})

export default () => {
    return createSelector(
        [ getChartdata ],
        chartdata => {
            return chartdata
        }
    )
}
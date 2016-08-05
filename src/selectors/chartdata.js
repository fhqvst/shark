import { createSelector } from 'reselect'
import _ from 'lodash'

const getChartdata = (state, props) => state.chartdata[_.findIndex(state.chartdata, {instrumentId: props.instrument.id})]

export default () => {
    return createSelector(
        [ getChartdata ],
        chartdata => {
            return chartdata
        }
    )
}
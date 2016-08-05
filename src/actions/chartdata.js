import { GET_CHARTDATA } from '../constants';

export function gotChartdata(id, period, data) {
    return {
        type: GET_CHARTDATA,
        instrumentId: id,
        period: period,
        data: data
    }
}

export function getChartdata(id, period) {
    return (dispatch, getState, {avanza, queue}) => {
        queue.add(() => avanza.getChartdata(id, period))
        .then(chartdata => {

            let data = [];
            chartdata.dataSeries.map(datapoint => {
                data.push({
                    x: new Date(datapoint.timestamp).getTime(),
                    y: datapoint.value
                })
            })

            dispatch(gotChartdata(id, period, data))
        }).catch(e => console.error(e))
    }
}
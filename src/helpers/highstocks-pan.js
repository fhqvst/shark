export default function (H) {
    H.wrap(H.Chart.prototype, 'pan', function (proceed) {
        var chart = this,
            hoverPoints = chart.hoverPoints,
            doRedraw,
            e = arguments[1],
            each = H.each;

        // remove active points for shared tooltip
        if (hoverPoints) {
            each(hoverPoints, function (point) {
                point.setState();
            });
        }

        if(!chart.yAxis[0].startingExtremes) {
            chart.yAxis[0].startingExtremes = chart.yAxis[0].getExtremes()
        }

        var mousePosX = e.chartX,
            mousePosY = e.chartY,
            xAxis = chart.xAxis[0],
            yAxis = chart.yAxis[0],
            startPosX = chart.mouseDownX,
            startPosY = chart.mouseDownY,
            halfPointRangeX = (xAxis.pointRange || 0) / 2,
            halfPointRangeY = (yAxis.pointRange || 0) / 2,
            extremesX = xAxis.getExtremes(),
            newMinX = xAxis.toValue(startPosX - mousePosX, true) + halfPointRangeX,
            newMaxX = xAxis.toValue(startPosX + chart.plotWidth - mousePosX, true) - halfPointRangeX,
            extremesY = yAxis.startingExtremes,
            newMaxY = yAxis.toValue(startPosY - mousePosY, true) + halfPointRangeY,
            newMinY = yAxis.toValue(startPosY + chart.plotHeight - mousePosY, true) - halfPointRangeY;

        if(xAxis.series.length) {

            if (
                xAxis.series.length &&
                newMinX > Math.min(extremesX.dataMin, extremesX.min) &&
                newMaxX < Math.max(extremesX.dataMax, extremesX.max)
            ) {
                xAxis.setExtremes(newMinX, newMaxX, false, false, {
                    trigger: 'pan'
                });
                doRedraw = true;
            }

            if (
                xAxis.series.length &&
                newMinY > Math.min(extremesY.dataMin * .99, extremesY.min) &&
                newMaxY < Math.max(extremesY.dataMax * 1.01, extremesY.max)
            ) {
                yAxis.setExtremes(newMinY, newMaxY, false, false, {
                    trigger: 'pan'
                });
                doRedraw = true;
            }


        }

        chart.mouseDownX = mousePosX;
        chart.mouseDownY = mousePosY;// set new reference for next run

        if (doRedraw) {
            chart.redraw(false);
        }
    });

}
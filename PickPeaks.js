function pickPeaks(arr) {
    var ret = {
        pos: [],
        peak: []
    };

    var isPlateaus = false;
    var peak = -1;
    var pos = -1;
    for (var curPos = 1; curPos <= arr.length - 1; curPos++) {
        var preVal = arr[curPos - 1] !== undefined ? arr[curPos - 1] : -1;
        var nextVal = arr[curPos + 1] !== undefined ? arr[curPos + 1] : -1;

        if ((preVal !== -1 && arr[curPos] > preVal)) {
            //document.write('preVal = ' + preVal + ' nextVal = ' + nextVal + '<br>');
            document.write('curPos = ' + curPos + ' curVal = ' + arr[curPos] + '<br>');
            if ((nextVal !== -1 && arr[curPos] > nextVal)) {
                // find the peak
                ret.peak.push(arr[curPos]);
                ret.pos.push(curPos);
            } else if (nextVal === arr[curPos]) {
                // maybe is plateaus
                isPlateaus = true;
                peak = arr[curPos];
                pos = curPos;
            }
        }

        if (isPlateaus && arr[curPos] === preVal && (nextVal !== -1 && arr[curPos] > nextVal)) {
            ret.peak.push(peak);
            ret.pos.push(pos);
            isPlateaus = false;
        }
    }

    return ret;
}

//var result = pickPeaks([1,2,2,2,3,3,6,2]);
//var result = pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]);
document.write('pos = ' + result.pos + ' ,peak = ' + result.peak);
exports.min = function min (array) {
    let min = 0;
    if (array && array.length > 0) {
        min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) min = array[i];
        }
    }
    return min;
}
exports.max = function max (array) {
    let max = 0;
    if (array && array.length > 0) {
        max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) max = array[i];
        }
    }
    return max;
}
exports.avg = function avg (array) {
    let avg = 0;
    if (array && array.length > 0) {
        let i = 0;
        let counts = 0;
        for ( i ; i < array.length; i++) {
            avg += array[i];
            counts++;
        }
        avg = avg / counts;
    }
    return avg;
}

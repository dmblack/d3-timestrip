export function getMin(data, key) {
    return d3.min(data, function (d) {
        return d[key];
    });
}

export function getMax(data, key) {
    return d3.max(data, function (d) {
        return d[key];
    });
}
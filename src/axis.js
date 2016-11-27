export function getXScale(beginning, ending, min, max) {
    return d3.scaleTime()
        .domain([beginning, ending])
        .range([min, max]);
}

export function getXAxis(scale) {
    let axis = d3.axisBottom()
        .scale(scale)
        .tickFormat()
        .tickSize();
}
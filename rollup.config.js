const globals = {
    d3: 'd3'
};

export default {
    entry: 'src/d3-timestrip.js',
    sourceMap: 'inline',
    moduleName: 'd3',
    globals: globals,
    external: Object.keys(globals),
    targets: [
        { format: 'umd', dest: 'build/d3-timestrip.js' }
    ]
};
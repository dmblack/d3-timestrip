import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

const globals = {
    d3: 'd3',
    lodash: '_'
};

export default {
    entry: 'src/d3-timestrip.js',
    plugins: [
        babel(babelrc()),
        nodeResolve({ jsnext: true, main: true }),
    ],
    sourceMap: 'inline',
    moduleName: 'd3',
    globals: globals,
    external: Object.keys(globals),
    targets: [
        { format: 'umd', dest: 'build/d3-timestrip.js' }
    ]
};
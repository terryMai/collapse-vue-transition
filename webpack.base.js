const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        'collapse-vue-transition': './src/index.js',
        'collapse-vue-transition.min': './src/index.js'
    },
    output: {
        filename: '[name].js',
        library: 'collapseVueTransition',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
}

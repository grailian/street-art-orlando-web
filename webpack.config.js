var webpack = require('webpack');

module.exports = {
    entry:  './src/app.js',
    output: {
        path:     'builds',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    module: {
        loaders: [
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }]
    },
    devtool: 'source-map',
    plugins: new webpack.optimize.UglifyJsPlugin({minimize: true})
};
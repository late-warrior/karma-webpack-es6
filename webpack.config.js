const path = require('path');
/**
 * Created by sriram on 11/5/17.
 */
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true
            }
        }
        ]
    },
    devtool: 'inline-source-map'
}

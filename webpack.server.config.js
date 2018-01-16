module.exports = {
    entry: './server.js',
    output: {
        filename: 'bundle.server.js',
        path: __dirname
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
}
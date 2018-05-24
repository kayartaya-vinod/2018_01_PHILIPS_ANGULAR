let config = {
    entry: {
        'bundle': './src/main.ts'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        path: __dirname + '/dist', 
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: ['ts-loader']
            }
        ]
    }
};

module.exports = config;
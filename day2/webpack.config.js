var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        "bundle": "./app/main.ts", 
        "polyfills": "./app/polyfills.ts"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: "ts-loader!angular2-template-loader"
            },
            {
                test: /\.html$/,
                loaders: "html-loader"
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../dist')
        ),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};
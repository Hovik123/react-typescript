let path = require('path');
let webpack = require('webpack');

let tsEntryPath = path.resolve(__dirname, 'src', 'index.tsx');
let htmlEntryPath = path.resolve(__dirname, 'src', 'index.html');
let buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
    entry: [
        tsEntryPath,
        htmlEntryPath
    ],
    output: {
        filename: "bundle.js",
        path: buildPath
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        exclude: /(node_modules|bower_components)/,
    },

    module: {
        loaders: [

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/, loader: "awesome-typescript-loader",

            },
            {
                test: /\.html$/, loader: 'file?name=[name].[ext]'
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

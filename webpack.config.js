const webpack = require("webpack");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist/assets/js"),
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "/"),
        },
        compress: true,
        port: 3000,
    },
};

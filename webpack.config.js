const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            Assets: path.resolve(__dirname, 'src/assets'),
            Entities: path.resolve(__dirname, 'src/entities'),
            Features: path.resolve(__dirname, 'src/features'),
            App: path.resolve(__dirname, 'src/app'),
            Fonts: path.resolve(__dirname, 'src/fonts'),
            Pages: path.resolve(__dirname, 'src/pages'),
            Shared: path.resolve(__dirname, 'src/shared'),
            Widgets: path.resolve(__dirname, 'src/widgets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(mp4|png|jpe?g|gif|webp)$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.m?js|map$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
    },
}
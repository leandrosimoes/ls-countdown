const isProduction = process.argv.indexOf('production') > -1;
const mode = isProduction ? 'production' : 'development';

const config = {
    mode,
    entry: {
        '../dist/js/ls-countdown.min': './src/ts/ls-countdown',
        '../docs/js/ls-countdown.min': './src/ts/ls-countdown'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'ts-loader'
            },
            {
                test: /\.css?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}

module.exports = config;
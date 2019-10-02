const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'lib'),
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
        ],
    },
};
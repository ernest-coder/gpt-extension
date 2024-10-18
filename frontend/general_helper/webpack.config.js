const path = require('path');

module.exports = {
    entry: './popup.js', // Your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    mode: 'production', // or 'development'
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
        }, ],
    },
};
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            loader: [
                'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader' // interpreta @import, url()...
            ]
        }]
    }
};
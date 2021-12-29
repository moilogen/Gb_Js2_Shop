const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },

    plugins: [
      new HtmlWebpackPlugin({
          title: 'GeekBrains Shop JS2',
          template: path.resolve(__dirname, './public/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
    },

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Comp
            "sass-loader",
          ],
        },
      ],
    },
};

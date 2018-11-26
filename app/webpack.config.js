const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
  entry: { app: resolve('index.ts') },
  output: {
    path: resolve('..', 'dist', 'app')
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: 'ts-loader', options: { configFile: 'tsconfig.prod.json' } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    })
  ]
};

function resolve(...paths) {
  return path.join(__dirname, ...paths);
}

module.exports = configuration;

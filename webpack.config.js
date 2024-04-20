const path = require('path');

module.exports = {
  // Other webpack configuration options...

  // Specify the entry point for your client-side code
  entry: './src/client/index.js',

  // Specify the output for your client-side bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js',
  },

  // Add a target option to specify the environment
  target: 'web', // for client-side browser environment

  // Add node specific polyfills and mocks
  node: {
    fs: 'empty', // Avoid bundling fs module (use empty placeholder instead)
    net: 'empty', // Avoid bundling net module (use empty placeholder instead)
    http: 'empty', // Avoid bundling http module (use empty placeholder instead)
  },

  // Add rules for transpiling and processing client-side code
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Add more rules as needed for handling other file types (e.g., CSS, images)
    ],
  },

  // Add plugins and other configuration as needed
};
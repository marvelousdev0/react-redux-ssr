module.exports = {
  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }]
          ],
          plugins: ['@babel/plugin-proposal-function-bind']
        }
      }
    ]
  }
};

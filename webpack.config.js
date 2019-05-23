config = {
  entry: `${__dirname}/src/app.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  devtool: "source-map",
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }

}

module.exports = config;

module.exports = {
  entry: './js/app.js',
  output: {
    path: './js',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.hbs$/,
        exclude: /(node_modules)/,
        loader: 'handlebars-loader',
      },
    ]
  }
}

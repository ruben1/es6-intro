// For conveniance we create variable that holds the directory to bower_components
//var bower_dir = __dirname + '/bower_components';
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  // The resolve.alias object takes require expressions 
  // (require('react')) as keys and filepath to actual
  // module as values
  /*resolve: {
    alias: {
      'react': bower_dir + '/react/react.min.js'
    }
  },
  */
  // We add a plugin called CommonsChunkPlugin that will take the vendors chunk
    // and create a vendors.js file. As you can see the first argument matches the key
    // of the entry, "vendors"
  /*plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
  ],*/
  plugins: [new webpack.optimize.CommonsChunkPlugin('main', null, false)],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    // There is no reason for WebPack to parse this file
    /*noParse: [bower_dir + '/react/react.min.js'],*/
    loaders: [
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel?optional=runtime' }
    ]
  }
};

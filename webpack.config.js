const merge = require('webpack-merge');

module.exports = merge(common, {
  watch: true,
  mode: 'development',
  performance: { hints: false },
  devtool: 'inline-source-map'
});
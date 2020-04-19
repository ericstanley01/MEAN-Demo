const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        TEST_API_ENDPOINT: JSON.stringify(process.env.TEST_API_ENDPOINT),
        PRODUCTION_API_ENDPOINT: JSON.stringify(process.env.PRODUCTION_API_ENDPOINT)
      }
    })
  ]
}

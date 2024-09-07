const path = require('path');

module.exports = {
  // Other Webpack configuration options...

  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),  // Add polyfill for 'zlib' module
      // Other fallbacks you might need
    },
  },

  // Your other configurations...
};

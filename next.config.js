const nextEnv = require('next-env');
const withCSS = require('@zeit/next-css');

require('dotenv').config();

const withNextEnv = nextEnv();

module.exports = withNextEnv(
  withCSS({
    cssLoaderOptions: {
      url: false,
    },
  }),
);

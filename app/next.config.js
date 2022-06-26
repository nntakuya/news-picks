const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        '@': path.join(__dirname),
        '@styles': path.join(__dirname, 'styles/pages'),
        '@components': path.join(__dirname, 'components'),
      },
    };
    return config;
  },

}

module.exports = nextConfig

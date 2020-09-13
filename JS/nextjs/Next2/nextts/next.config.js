require('dotenv').config()
const path = require('path')

module.exports = {
  env: {
    API_URL: process.env.API_URL
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
      '@services': path.resolve(__dirname, 'src/services/')
    }

    return config
  },
}

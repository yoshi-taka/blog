/**
 * @type {import('next').NextConfig}
 */

const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  output: 'export',
  assetPrefix: process.env.GITHUB_REF ? '/blog/' : '/blog/',
  basePath: process.env.GITHUB_REF ? '/blog' : '/blog',
  reactStrictMode: true,
})

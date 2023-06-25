const config = {
  sharpOptions: {
    webp: {
      effort: 0,
    },
    avif: {
      effort: 0,
    }
  },
  convertFormat: [
    ['png', 'webp'],
    ['jpg', 'avif'],
  ],
  basePath: process.env.GITHUB_REF ? '/blog' : '/blog',
  images: {
    deviceSizes: [640, 960, 1280, 1600, 1920],
  },
}

module.exports = config

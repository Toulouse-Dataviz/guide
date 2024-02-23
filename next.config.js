// next.config.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
// for github deploy
let basePath = process.env.NEXT_BASEPATH ?? '/guide'


// see https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/#configure-paths
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  //assetPrefix = `/${repo}/`
  //basePath = `/${repo}`
}

// do not uncomment output: 'export', it makes generation crashes :(
const nextConfig = {
  //output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath 
}

module.exports = withPlugins([
  [
    optimizedImages,
    {
      images: {
        // for example
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
        disableStaticImages: true
      }
    }
  ],
  [
    withBundleAnalyzer({
      staticPageGenerationTimeout: 300,
      images: {
        unoptimized: true,
        domains: [
          'www.notion.so',
          'notion.so',
          'images.unsplash.com',
          'pbs.twimg.com',
          'abs.twimg.com',
          's3.us-west-2.amazonaws.com',
          'transitivebullsh.it'
        ],
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
      }
    })
  ],
  nextConfig,

  // your other plugins here
])

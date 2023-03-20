// next.config.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const nextConfig = {
  output: 'export'
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
  nextConfig

  // your other plugins here
])

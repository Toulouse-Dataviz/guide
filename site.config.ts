import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  //rootNotionPageId: '7875426197cf461698809def95960ebf',
  //rootNotionPageId: 'percep/ba623f2cbde54e888d88a9fc50016f21?v=b2af88821e6d47eeba7a827ff65573c6',
  rootNotionPageId:
    'toulouse-dataviz.notion.site/33d69905ad354e0385ccb3a12df48830?v=12bec766fd194c69b56e8145f2a2c74a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Guidelines PF de Toulouse DataViz',
  domain: 'notion2site.vercel.app',
  author: 'TDV',
  copyright:
    'Toulouse DataViz (A. Roan et V. Vivanloc) à partir de transitivebullsh.it',

  // open graph metadata (optional)
  description: 'Guidelines PF de Toulouse DataViz',

  // social usernames (optional)
  twitter: 'Tls_dataviz',
  github: 'ToulouseDataViz',
  linkedin: null,
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  discord: 'https://discord.gg/RbTR4jKRp9',
  youtube: 'channel/UCo64gnxLZs1xIN-Y0Bv_Hpg/featured',
  meetup:
    'https://www.meetup.com/fr-FR/Meetup-Visualisation-des-donnees-Toulouse/',
  mail: 'mailto://contact@toulouse-dataviz.fr',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})

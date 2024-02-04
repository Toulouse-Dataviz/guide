import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  /** IMPORTANT: Do not forget to go "Share"/"Publish" and activate the site during export! */
  rootNotionPageId:
    'toulouse-dataviz.notion.site/3ae40501bf7547368428bcec177e6328?v=117abe6706ef4ece846d8266217ea8ac&pvs=4',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Guidelines PF de Toulouse DataViz',
  domain: 'notion2site.vercel.app',
  author: 'TDV',
  copyright:
    'TDV - Next.js Notion Starter Kit',

  // open graph metadata (optional)
  description: 'Guidelines Pierre Fabre de Toulouse DataViz',

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
 navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Accueil',
      url: 'index.html'
    },  
    {
      title: 'A propos',
      url: 'introduction.html'
    }, 
  ],
  showPageTitle:true,
  showBreadcrumb:false,
  isSearchEnabled: false,

  // set it at "/" for root folder stored site otherwise, set to "" if the site is stored in a given folder
  linkPrefixUrl:""  
})

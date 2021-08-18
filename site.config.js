module.exports = {
  // where it all starts -- the site's root Notion page (required)
  //rootNotionPageId: '872d07bf660b4e28b403b8a9d5bd179e', // espace pobox
  //rootNotionPageId: 'Nextjs-Notion-Test-ec4e155f14cf4e1ebf236af700c6bfe7', // newsletters TDV hébergées chez Alain
  rootNotionPageId: 'Les-ressources-de-ToulouseDataViz-061ce66f47784394a664e0c9b758ea04', // newsletters TDV bébergées chez TDV
  //rootNotionPageId: 'https://alainroan.notion.site/Collections-3956c20e5b944d1facb1a50f769ea63d', // Collections

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Les ressources de Toulouse Dataviz',
  domain: 'ressources.toulouse-dataviz.fr',
  author: 'Toulouse DataViz (Alain Roan) à partir de transitivebullsh.it',

  // open graph metadata (optional)
  description: "Description des ressources de Toulouse DataViz",
  socialImageTitle: 'toulouse-dataviz.fr',
  socialImageSubtitle: 'Voir les données et les donner à voir',

  // social usernames (optional)
  
  twitter: 'Tls_dataviz',
  github: 'ToulouseDataViz',
  linkedin: null,
  discord: 'https://discord.gg/RbTR4jKRp9',
  youtube: 'channel/UCo64gnxLZs1xIN-Y0Bv_Hpg/featured'
,
  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/newsletters': 'e239c954d9a04780843e173559717360'
  }
}

// see Mytchall Bransgrove, Create a fully static Next.js site with local images, July 2022,
// https://mytchall.dev/create-a-fully-static-next-js-site-with-local-images/

/** enable download */
const downloadImages = true
/** rewrite site URLs (set to false to force download again, otherwise, nothing is downloaded if it has been already */
const patchSite = true

// Dependencies:
// jsdom walk replaceall

const path = require('path')
const fs = require('fs')
const fsp = fs.promises

const walk = require('walk')
const replaceAll = require('replaceall')
const { JSDOM } = require('jsdom')
const exec = require('child_process').exec

// usage :
// node fetchAssets.js nextjsOutDirectory imagesPrefix1 imagesPrefix2 imagesPrefix3

// example :
// node fetchAssets.js ./out http://localhost:1337

// What I did :
// - Put the file at the root of my project
// - Edit my "export" npm script and add "&& npm run fetchAssets.js xxx" after "next build && next export"

let startPath = process.argv[2]
let urls = process.argv.slice(3)
let completeUrls = []
let completeUrlsTrimmed = []
const assetFolder = 'images/'
const outAssetFolder = path.join(startPath, assetFolder)
fs.mkdirSync(outAssetFolder, { recursive: true })

async function fetchAssets() {
  console.log(`Walking ${startPath}...`)
  let walker = walk.walk(startPath)
  walker.on('file', async (root, fileStats, next) => {
    if (fileStats.name.indexOf('.html') > 0) {
      const filePath = path.join(root, fileStats.name)
      const file = await fsp.readFile(filePath, { encoding: 'utf-8' })
      await downloadImagesFromHtmlPage(file)
      await rewritePageAssetUrls(file, filePath)
    } else if (fileStats.name.indexOf('.json') > 0) {
      const filePath = path.join(root, fileStats.name)
      const file = await fsp.readFile(filePath, { encoding: 'utf-8' })
      await downloadImagesFromJsonFile(file)
      await rewritePageAssetUrls(file, filePath)
    }
    next()
  })
  walker.on('errors', console.log)
  walker.on('end', function () {
    console.log('all done')
  })
}

async function downloadImagesFromHtmlPage(data) {
  let dom = new JSDOM(data, { resources: 'usable' })
  let imgSources = dom.window.document.querySelectorAll('img[src]')
  let imgSourceSets = dom.window.document.querySelectorAll('img[srcSet]')
  let fileLinkSources = dom.window.document.querySelectorAll(
    'a.notion-file-link[href]'
  )

  function downloadImageFromUrl(src) {
    if (src && src !== '') {
      if (src.indexOf('http') === 0) {
        downloadSrc(src)
      }
    }
  }

  function downloadAssetFromUrl(src) {
    if (src && src !== '') {
      if (src.indexOf('http') === 0) {
        downloadSrc(src, true)
      }
    }
  }

  imgSources.forEach((e) => downloadImageFromUrl(e.getAttribute('src')))

  imgSourceSets.forEach((srcSet) => {
    const imgSrcSet = srcSet.getAttribute('srcset')
    imgSrcSet.split(', ').forEach((src) => {
      downloadImageFromUrl(src)
    })
  })

  fileLinkSources.forEach((e) => downloadAssetFromUrl(e.getAttribute('href')))
}

/** Rewrite page asset URL to local paths */
async function rewritePageAssetUrls(data, filePath) {
  console.log(` patching ${completeUrls.length} assets URLs`)

  // Loop through completeUrls
  for (let i = 0; i < completeUrls.length; i++) {
    data = replaceAll(
      completeUrls[i],
      assetFolder + completeUrlsTrimmed[i],
      data
    )
    data = replaceAll(
      decodeURIComponent(completeUrls[i]),
      path.join(assetFolder, completeUrlsTrimmed[i]),
      data
    )

    data = replaceAll(
      replaceAll('&', '&amp;', completeUrls[i]),
      path.join(assetFolder, completeUrlsTrimmed[i]),
      data
    )
  }

  try {
    console.log(` updating file ${filePath}`)
    if (patchSite) {
      fsp.writeFile(filePath, data, { encoding: 'utf8' })
    }
  } catch (e) {
    console.log(e)
  }
}

async function downloadImagesFromJsonFile(data) {
  let srcs = []
  urls.forEach((url) => {
    console.log('looping through URL: ', url)
    let regex = new RegExp('"' + url + '/.*?' + '"', 'g')
    srcs = [...srcs, ...data.matchAll(regex)]
  })
  srcs = srcs.flat().map((e) => e.replace(/"/g, ''))

  function _downloadAsset(src) {
    if (src && src !== '') {
      if (src.indexOf('http') === 0) {
        downloadSrc(src)
      }
    }
  }

  srcs.forEach((e) => _downloadAsset(e))
}

// Download src images
async function downloadSrc(src, rawUrlPath) {
  console.log('src = ' + src)

  
  const urlTrimmed = src.split('?')[0]
  

  const filename = urlTrimmed.split('/').slice(-1)[0]
  const args = src.split('?')[1]

  const argsSplit = args.split('&')

  const filenameFixSplit = filename.split('%2F')
  const filenameFixLength = filenameFixSplit.length

  let filenamePrefix = filenameFixSplit[filenameFixLength - 2];
  if (filenamePrefix===undefined) {
    const argSpaceIdArray=argsSplit.filter(arg=>arg.startsWith("spaceId"))
    if (argSpaceIdArray.length>0) {
      const argSpaceId= argSpaceIdArray[0];
      filenamePrefix=argSpaceId.slice(argSpaceId.indexOf("=")+1);
    }
  }
  
  let filenameFix = filenamePrefix + '_' +
    filenameFixSplit[filenameFixLength - 1].split('%3F')[0]

  console.log('downloading from asset', src, 'to', filenameFix)

  if (completeUrls.indexOf(src) === -1) {
    completeUrls.push(src)
    completeUrlsTrimmed.push(filenameFix)
  }

  

  try {
    const fullpath = path.join(startPath, assetFolder, filenameFix)
    await fsp.stat(fullpath)
    console.log('skipping asset named', fullpath, 'already exists')
  } catch (e) {
    if (downloadImages) {

  let downloadPath = src;
  if (rawUrlPath) {    
    downloadPath = src;
  } else 
  {
    downloadPath = urlTrimmed.split('?')[0];  
  }
  
  console.log('downloadPath = ' + downloadPath)
      const command = `curl -X GET -G "${downloadPath}" -d ${
        argsSplit[0]
      } -d ${argsSplit[1]} -d ${argsSplit[2]} -o ${path.join(
        outAssetFolder,
        filenameFix.replace('(', '\\(').replace(')', '\\)')
      )}`

      console.log(command)
      child = exec(command, function (error, _stdout, _stderr) {
        if (error !== null) {
          console.log(`\x1b[31m exec error: ${error}\x1b[0m`)
        }
      })
    }
  }
}

console.log('Fetching assets...')
fetchAssets()

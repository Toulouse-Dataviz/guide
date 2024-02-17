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
/** URL referring to Notion AWS storage */
let remoteURLs = []
/** reformatted URI to be stored locally */
let localURIs = []
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
  console.log(` patching ${remoteURLs.length} assets URLs`)

  // Loop through completeUrls
  for (let i = 0; i < remoteURLs.length; i++) {
    const urlRemote = remoteURLs[i];
    const urlLocal = localURIs[i];
    data = replaceAll(
      urlRemote,
      assetFolder + urlLocal,
      data
    )
    data = replaceAll(
      decodeURIComponent(urlRemote),
      path.join(assetFolder, urlLocal),
      data
    )

    data = replaceAll(
      replaceAll('&', '&amp;', urlRemote),
      path.join(assetFolder, urlLocal),
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
//  console.log('src = ' + src)

  const urlTrimmed = src.split('?')[0]

  const filename = urlTrimmed.split('/').slice(-1)[0]
  const args = src.split('?')[1]


  if (args) {
    
    // Notion stored resource format URL 
    // eg. https://file.notion.so/f/f/adba2cb3-b809-41d0-b7a2-c0e7bfb7edbc/1724d44a-25f4-4e95-bd60-107657b07084/lignes.rawgraphs?id=1890e9d9-1123-4f2e-8468-2c04f85863f2&table=block&spaceId=adba2cb3-b809-41d0-b7a2-c0e7bfb7edbc&expirationTimestamp=1707876000000&signature=rOWnDPmAZYutMevY-oAbLMayXNNu0nO7yrq9bw5DYH0
    
    const argsSplit = args.split('&')

    const filenameFixSplit = filename.split('%2F')
    const filenameFixLength = filenameFixSplit.length

    let filenamePrefix = filenameFixSplit[filenameFixLength - 2];
    if (filenamePrefix === undefined) {
      const argSpaceIdArray = argsSplit.filter(arg => arg.startsWith("spaceId"))
      if (argSpaceIdArray.length > 0) {
        const argSpaceId = argSpaceIdArray[0];
        filenamePrefix = argSpaceId.slice(argSpaceId.indexOf("=") + 1);
      }
    }

    let filenameFix = filenamePrefix + '_' +
      filenameFixSplit[filenameFixLength - 1].split('%3F')[0]

    
    if (remoteURLs.indexOf(src) === -1) {
        
        remoteURLs.push(src)
        localURIs.push(filenameFix)
    }

    try {
      const fullpath = path.join(startPath, assetFolder, filenameFix)
      await fsp.stat(fullpath)
      console.log('\x1b[33m skipping asset named', fullpath, 'already exists\x1b[0m')
    } catch (e) {
      if (downloadImages) {

        let downloadPath = src;
        if (rawUrlPath) {
          downloadPath = src;
        } else {
          downloadPath = urlTrimmed.split('?')[0];
        }

        console.log('   >',downloadPath,'>>', filenameFix)

        if (argsSplit === undefined) {
          console.log(`\x1b[31m Error extracting URL from: ${src}, ${rawUrlPath}, there is no '&' separator!\x1b[0m`)
          return
        }
        const command = `curl -X GET -G "${downloadPath}" -d ${argsSplit[0]
          } -d ${argsSplit[1]} -d ${argsSplit[2]} -o ${path.join(
            outAssetFolder,
            filenameFix.replace('(', '\\(').replace(')', '\\)')
          )}`

        //console.log(command)
        child = exec(command, function (error, _stdout, _stderr) {
          if (error !== null) {
            console.log(`\x1b[31m exec error: ${error}\x1b[0m`)
          }
        })
      }
    }
  } else {
    // AWS format URL 
    // eg. https://prod-files-secure.s3.us-west-2.amazonaws.com/adba2cb3-b809-41d0-b7a2-c0e7bfb7edbc/2d5d9e69-f1a5-46f6-b540-89535eef68ef/carte_de_carrs.rawgraphs
    // becomes
    //     https://file.notion.so/f/f/adba2cb3-b809-41d0-b7a2-c0e7bfb7edbc/2d5d9e69-f1a5-46f6-b540-89535eef68ef/carte_de_carrs.rawgraphs?id=85d1150e-fc69-4d29-8a37-acba7bb9f0fc&table=block&spaceId=adba2cb3-b809-41d0-b7a2-c0e7bfb7edbc&expirationTimestamp=1708034400000&signature=PLcAGOyinaRuyCOtAgEefPMiPPFajNObzw-P9IjxqRc&downloadName=carte_de_carr%C3%A9s.rawgraphs

    //     https://file.notion.so/f/f/adba2cb3-b809-41d0-b7a2-c0e7bfb7edbc/2d5d9e69-f1a5-46f6-b540-89535eef68ef/carte_de_carrs.rawgraphs?id=85d1150e-fc69-4d29-8a37-acba7bb9f0fc&table=block&spaceId=adba2cb3-b809-41d0-b7a2-c0e7bfb7edbc&expirationTimestamp=1708034400000&signature=PLcAGOyinaRuyCOtAgEefPMiPPFajNObzw-P9IjxqRc
    // see also https://github.com/dragonman225/nast/blob/b1ab22c9ba1d0bf5d38e3d5b791d60c83f6a6c46/packages/nast-util-from-notionapi/src/util.ts#L205
    const srcSplit = src.split("/")
    const localUrl=srcSplit[3]+"_"+srcSplit[srcSplit.length-1];
    console.log('\x1b[31m secure file NOT SUPPORTED   >',src,'>>', localUrl,` \x1b[0m`)

    return
    console.log(src);
    
    
    remoteURLs.push(src)
    
    
    localURIs.push(localUrl);
    
    // from https://github.com/dragonman225/nast/blob/b1ab22c9ba1d0bf5d38e3d5b791d60c83f6a6c46/packages/nast-util-from-notionapi/src/util.ts#L76
    const baseUrl = `https://www.notion.so/signed/${encodeURIComponent(src)}`

    const queryParams = []
    //queryParams.push(`table=${forEntityType}&id=${forEntityId}`)
    
    const convertToAccessibleUrl =  `${baseUrl}?${queryParams.join("&")}`

    

    const command = `curl -X GET -G "${convertToAccessibleUrl}" -o ${path.join(
      outAssetFolder,
      localUrl
    )}`

  //console.log(command)
  
  child = exec(command, function (error, _stdout, _stderr) {
    if (error !== null) {
      console.log(`\x1b[31m exec error: ${error}\x1b[0m`)
    }
  })
  
  }
 

}

console.log('Fetching assets...')
fetchAssets()

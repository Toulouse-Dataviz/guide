#!/bin/bash
# dedicated to githubpages, to not fiddle with _next Vercel

srcDir=docs
destDir=docs

if [ "$1" == "--prod" ]
then
    # local folder where github page repo is
    destDir=/userdata/dev/tdv_site/toulousedataviz.github.io/guide
fi
mkdir -p $destDir

echo "Creating index html page"
cp $srcDir/index.html $srcDir/guide.html 

if [ "$srcDir" != "$destDir" ] 
then
    echo "Copying to $destDir..."    
    cp -Rfv $srcDir/* $destDir
fi

# for github pages 
touch $destDir/.nojekyll



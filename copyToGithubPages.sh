#!/bin/bash
# dedicated to githubpages, to not fiddle with _next
#cloneRepoPath=/userdata/dev/tdv_site/toulousedataviz.github.io
srcDir=docs
destDir=docs
mkdir -p docs
cloneRepoPath=docs

if [ "$srcDir" != "$destDir" ] 
then
    cp -R out/* $cloneRepoPath
fi
touch $cloneRepoPath/.nojekyll
cp $cloneRepoPath/index.html $cloneRepoPath/guide.html 
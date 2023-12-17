#!/bin/bash
# dedicated to githubpages, to not fiddle with _next
#cloneRepoPath=/userdata/dev/tdv_site/toulousedataviz.github.io
mkdir -p docs
cloneRepoPath=docs
touch out/.nojekyll
cp -R out/* $cloneRepoPath
cp $cloneRepoPath/index.html $cloneRepoPath/guide.html 
#!/bin/bash
# dedicated to githubpages, to not fiddle with _next
cloneRepoPath=/userdata/dev/tdv_site/toulousedataviz.github.io 
touch out/.nojekyll
cp -R out/* $cloneRepoPath
mv $cloneRepoPath/index.html $cloneRepoPath/guide.html 
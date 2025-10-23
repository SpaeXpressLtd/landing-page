#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# if you are deploying to a custom domain
echo 'www.spae.express' >./dist/CNAME

git init
git add -A
git commit -m 'deploy'

gh-pages -d ./dist

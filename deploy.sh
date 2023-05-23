#!/usr/bin/env sh

set -e

npm run build-only

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:PratkinV/fastfood-vue.git master:gh-pages

cd -
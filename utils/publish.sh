#!/bin/bash

set -o errexit

echo 'Building website to detect errors..'
bundle exec jekyll build

echo 'Publishing updates...'
git add -A
git commit -am 'Update'
git push origin main

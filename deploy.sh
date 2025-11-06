#!/bin/bash

# Exit immediately if a command fails
set -e

# Build the site
echo "Building the Jekyll site..."
bundle exec jekyll build

# Go to the _site directory
cd _site

# Create a new Git repo inside _site
echo "Deploying to gh-pages branch..."
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy site to GitHub Pages"

# Push to the gh-pages branch (force-push)
# Replace <your-username>/<your-repo> with your GitHub repo info
git remote remove origin 2> /dev/null || true
git remote add origin https://github.com/Yukiyt778/Yukiyt778.github.io
git push -f origin gh-pages

# Cleanup
cd ..
rm -rf _site/.git

echo "Deployment complete. Go to GitHub > Settings > Pages and set source to 'gh-pages' branch."
#!/bin/bash

# Build the project for static deployment
echo "Building project..."
npm run generate

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete!"
echo "Your app should be available at: https://your-username.github.io/oska-nuxt-dashboard" 
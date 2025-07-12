#!/usr/bin/env node

/**
 * Script to help determine the correct base URL for GitHub Pages deployment
 * Run this script to get the correct baseURL for your repository
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get repository name from package.json or git config
function getRepoName() {
  try {
    // Try to get from package.json
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    if (packageJson.name && packageJson.name !== 'nuxt-app') {
      return packageJson.name;
    }
  } catch (e) {
    // Ignore errors
  }

  // Try to get from git remote
  try {
    const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
    const match = remoteUrl.match(/([^\/]+)\.git$/);
    if (match) {
      return match[1];
    }
  } catch (e) {
    // Ignore errors
  }

  return null;
}

function main() {
  console.log('🔍 GitHub Pages Base URL Checker\n');
  
  const repoName = getRepoName();
  
  if (repoName) {
    console.log(`📦 Repository name: ${repoName}`);
    console.log(`🌐 GitHub Pages URL: https://[username].github.io/${repoName}/`);
    console.log(`📝 Base URL should be: /${repoName}/`);
    console.log('\n💡 To fix the 404 errors:');
    console.log(`1. Set NUXT_PUBLIC_BASE_URL=/${repoName}/ in your .env.local file`);
    console.log('2. Or update the baseURL in nuxt.config.ts');
    console.log('3. Redeploy with: pnpm run deploy');
  } else {
    console.log('❌ Could not determine repository name');
    console.log('💡 Please check your package.json or git remote configuration');
  }
  
  console.log('\n📋 Common GitHub Pages URL patterns:');
  console.log('- User site: https://username.github.io/ (baseURL: "/")');
  console.log('- Project site: https://username.github.io/repo-name/ (baseURL: "/repo-name/")');
  console.log('- Custom domain: https://yourdomain.com/ (baseURL: "/")');
}

// Run the script
main(); 
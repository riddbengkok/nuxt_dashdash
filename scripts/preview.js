#!/usr/bin/env node

/**
 * Preview Script for Local Development
 * Builds the site for local preview and serves it
 */

import { execSync } from 'child_process'
import fs from 'fs'

function preview() {
  console.log('🚀 Starting local preview...')

  // Check if .output/public exists
  const outputDir = '.output/public'
  if (!fs.existsSync(outputDir)) {
    console.log('📦 Building for local preview...')
    try {
      // Build for local development (without production baseURL)
      execSync('cross-env NODE_ENV=development nuxt generate', {
        stdio: 'inherit',
        cwd: process.cwd(),
      })
      console.log('✅ Build completed successfully!')
    } catch (error) {
      console.error('❌ Build failed:', error.message)
      process.exit(1)
    }
  }

  console.log('🌐 Starting local server...')
  console.log('📱 Your site will be available at: http://localhost:3000')
  console.log('🔄 Press Ctrl+C to stop the server')

  try {
    // Start the server
    execSync('npx serve .output/public', {
      stdio: 'inherit',
      cwd: process.cwd(),
    })
  } catch (error) {
    if (error.status === 130) {
      console.log('\n👋 Server stopped by user')
    } else {
      console.error('❌ Server error:', error.message)
    }
  }
}

// Run the preview
preview()

#!/usr/bin/env node

/**
 * Detailed Bundle Analysis Script
 * Shows what's in each JavaScript chunk
 */

import fs from 'fs'
import path from 'path'

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function analyzeChunks() {
  console.log('🔍 Detailed Bundle Analysis')
  console.log('===========================\n')
  
  const nuxtDir = '.output/public/_nuxt'
  
  if (!fs.existsSync(nuxtDir)) {
    console.log('❌ _nuxt directory not found. Run "pnpm run generate" first.')
    return
  }
  
  const files = fs.readdirSync(nuxtDir)
    .filter(file => file.endsWith('.js'))
    .map(file => {
      const filePath = path.join(nuxtDir, file)
      const stat = fs.statSync(filePath)
      return {
        name: file,
        size: stat.size,
        sizeFormatted: formatBytes(stat.size)
      }
    })
    .sort((a, b) => b.size - a.size)
  
  console.log('📦 JavaScript Chunks:')
  console.log('=====================')
  
  files.forEach((file, index) => {
    console.log(`${index + 1}. ${file.name}: ${file.sizeFormatted}`)
  })
  
  const totalJS = files.reduce((sum, f) => sum + f.size, 0)
  console.log(`\n📊 Total JavaScript: ${formatBytes(totalJS)}`)
  
  // Analyze CSS files
  const cssFiles = fs.readdirSync(nuxtDir)
    .filter(file => file.endsWith('.css'))
    .map(file => {
      const filePath = path.join(nuxtDir, file)
      const stat = fs.statSync(filePath)
      return {
        name: file,
        size: stat.size,
        sizeFormatted: formatBytes(stat.size)
      }
    })
    .sort((a, b) => b.size - a.size)
  
  console.log('\n🎨 CSS Files:')
  console.log('=============')
  
  cssFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file.name}: ${file.sizeFormatted}`)
  })
  
  const totalCSS = cssFiles.reduce((sum, f) => sum + f.size, 0)
  console.log(`\n📊 Total CSS: ${formatBytes(totalCSS)}`)
  
  // Performance analysis
  console.log('\n⚡ Performance Analysis:')
  console.log('=======================')
  
  const totalAssets = totalJS + totalCSS
  const totalSize = totalAssets + (587.88 * 1024) // Adding font size from previous analysis
  
  console.log(`📦 Total assets: ${formatBytes(totalAssets)}`)
  console.log(`🎨 CSS: ${formatBytes(totalCSS)} (${((totalCSS / totalAssets) * 100).toFixed(1)}%)`)
  console.log(`⚡ JavaScript: ${formatBytes(totalJS)} (${((totalJS / totalAssets) * 100).toFixed(1)}%)`)
  console.log(`🔤 Fonts: ${formatBytes(587.88 * 1024)} (${((587.88 * 1024 / totalSize) * 100).toFixed(1)}%)`)
  
  // Recommendations based on sizes
  console.log('\n💡 Specific Recommendations:')
  console.log('============================')
  
  if (totalJS > 400 * 1024) { // 400KB
    console.log('⚠️  JavaScript bundle is large (>400KB)')
    console.log('   - Consider code splitting for routes')
    console.log('   - Use dynamic imports for large components')
    console.log('   - Lazy load non-critical features')
  }
  
  if (totalCSS > 50 * 1024) { // 50KB
    console.log('⚠️  CSS bundle is large (>50KB)')
    console.log('   - Consider purging unused CSS')
    console.log('   - Split CSS by route')
    console.log('   - Use CSS-in-JS for component-specific styles')
  }
  
  if (587.88 * 1024 > 200 * 1024) { // 200KB
    console.log('⚠️  Font bundle is large (>200KB)')
    console.log('   - Consider using system fonts')
    console.log('   - Use font-display: swap')
    console.log('   - Preload only critical fonts')
  }
  
  console.log('\n✅ Good practices already implemented:')
  console.log('   - Manual chunk splitting')
  console.log('   - CSS and JS separation')
  console.log('   - Font optimization with Google Fonts')
  console.log('   - Static site generation')
}

// Run the analysis
analyzeChunks() 
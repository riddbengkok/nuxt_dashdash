#!/usr/bin/env node

/**
 * Bundle Analysis Script
 * Provides detailed information about your Nuxt build
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

function getDirectorySize(dirPath) {
  let totalSize = 0
  const files = []
  
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath)
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        traverse(fullPath)
      } else {
        totalSize += stat.size
        files.push({
          path: fullPath.replace(dirPath, ''),
          size: stat.size,
          sizeFormatted: formatBytes(stat.size)
        })
      }
    }
  }
  
  traverse(dirPath)
  return { totalSize, files }
}

function analyzeBuild() {
  console.log('🔍 Nuxt Bundle Analysis')
  console.log('========================\n')
  
  const outputDir = '.output/public'
  
  if (!fs.existsSync(outputDir)) {
    console.log('❌ Build output not found. Run "pnpm run generate" first.')
    return
  }
  
  // Analyze the entire build
  const { totalSize, files } = getDirectorySize(outputDir)
  
  console.log(`📦 Total build size: ${formatBytes(totalSize)}`)
  console.log(`📁 Total files: ${files.length}`)
  
  // Group files by type
  const fileTypes = {}
  files.forEach(file => {
    const ext = path.extname(file.path) || 'no-extension'
    if (!fileTypes[ext]) fileTypes[ext] = []
    fileTypes[ext].push(file)
  })
  
  console.log('\n📊 File types breakdown:')
  Object.entries(fileTypes)
    .sort(([,a], [,b]) => {
      const aSize = a.reduce((sum, f) => sum + f.size, 0)
      const bSize = b.reduce((sum, f) => sum + f.size, 0)
      return bSize - aSize
    })
    .forEach(([ext, files]) => {
      const totalSize = files.reduce((sum, f) => sum + f.size, 0)
      console.log(`  ${ext}: ${files.length} files, ${formatBytes(totalSize)}`)
    })
  
  // Show largest files
  console.log('\n📈 Largest files:')
  files
    .sort((a, b) => b.size - a.size)
    .slice(0, 10)
    .forEach(file => {
      console.log(`  ${file.path}: ${file.sizeFormatted}`)
    })
  
  // Analyze _nuxt directory specifically
  const nuxtDir = path.join(outputDir, '_nuxt')
  if (fs.existsSync(nuxtDir)) {
    console.log('\n🎯 _nuxt directory analysis:')
    const nuxtFiles = fs.readdirSync(nuxtDir)
      .filter(file => fs.statSync(path.join(nuxtDir, file)).isFile())
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
    
    const nuxtTotalSize = nuxtFiles.reduce((sum, f) => sum + f.size, 0)
    console.log(`  Total _nuxt size: ${formatBytes(nuxtTotalSize)}`)
    console.log('  Largest _nuxt files:')
    nuxtFiles.slice(0, 5).forEach(file => {
      console.log(`    ${file.name}: ${file.sizeFormatted}`)
    })
  }
  
  console.log('\n💡 Optimization recommendations:')
  console.log('- Use dynamic imports for large components')
  console.log('- Optimize images (WebP, compression)')
  console.log('- Enable gzip compression on server')
  console.log('- Consider lazy loading for non-critical components')
  console.log('- Use tree-shaking to remove unused code')
  console.log('- Split vendor and app bundles')
}

// Run the analysis
analyzeBuild() 
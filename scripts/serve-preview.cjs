#!/usr/bin/env node

const { createServer } = require('http');
const { readFileSync, existsSync, statSync } = require('fs');
const { join, extname } = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = join(process.cwd(), '.output', 'public');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

function getMimeType(path) {
  const ext = extname(path).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

function serveFile(filePath, res) {
  try {
    const stats = statSync(filePath);
    if (stats.isFile()) {
      const content = readFileSync(filePath);
      const mimeType = getMimeType(filePath);
      res.writeHead(200, {
        'Content-Type': mimeType,
        'Content-Length': content.length,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
      return true;
    }
  } catch (error) {
    // File doesn't exist or can't be read
  }
  return false;
}

const server = createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  let path = url.pathname;

  // Remove the baseURL prefix for local preview
  if (path.startsWith('/nuxt_dashdash/')) {
    path = path.replace('/nuxt_dashdash/', '/');
  }

  // Default to index.html for root path
  if (path === '/') {
    path = '/index.html';
  }

  // Try to serve the file
  const filePath = join(PUBLIC_DIR, path);
  
  if (serveFile(filePath, res)) {
    return;
  }

  // If file not found, try serving index.html for SPA routing
  if (!path.includes('.')) {
    const indexPath = join(PUBLIC_DIR, 'index.html');
    if (serveFile(indexPath, res)) {
      return;
    }
  }

  // 404 Not Found
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

server.listen(PORT, () => {
  console.log(`🚀 Preview server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${PUBLIC_DIR}`);
  console.log(`🔧 BaseURL handling: /nuxt_dashdash/ -> /`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
  } else {
    console.error('❌ Server error:', error);
  }
  process.exit(1);
}); 
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/annie-portfolio' : '',
    images: {
      unoptimized: true,
    },
    // This is needed for GitHub Pages
    assetPrefix: process.env.NODE_ENV === 'production' ? '/annie-portfolio' : '',
  }
  
  module.exports = nextConfig
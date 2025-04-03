/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/annie-portfolio' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
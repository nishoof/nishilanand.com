import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects/crts',
        destination: '/projects/crts.io',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
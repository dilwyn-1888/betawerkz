/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.betawerkz.com.sg',
      },
    ],
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // baseURL: 'http://localhost/',
        baseURL: 'https://e-com-theta.vercel.app/'
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
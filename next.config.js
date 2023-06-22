/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseURL: 'http://localhost/',
        // baseURL: 'https://fruitdev.xyz'
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
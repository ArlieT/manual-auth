/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseURL: 'http://localhost/',
        // baseURL: 'https://fruitdev.xyz'
    },
    images:{
        domains:['lh3.googleusercontent.com','www.sportsdirect.com','cdn.shopify.com','sneakernews.com']
    }
}

module.exports = nextConfig
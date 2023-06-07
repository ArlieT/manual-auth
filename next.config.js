/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseURL: 'http://localhost/',
        // baseURL: 'https://fruitdev.xyz'
    },
    images:{
        domains:['lh3.googleusercontent.com','cdn.shopify.com']
    }
}

module.exports = nextConfig
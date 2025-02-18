const path = require('path')

module.exports = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8085',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8085',
            },
        ],
        deviceSizes: [750, 1080, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 120
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}
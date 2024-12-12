/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        // https://images.unsplash.com
        domains: ["i.imgur.com", "imgur.com", "images.ctfassets.net", "images.unsplash.com"],
    }
};

module.exports = nextConfig;
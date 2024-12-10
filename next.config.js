/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    // allow images from https://i.imgur.com/4NxsdyM.jpeg
    images: {
        // https://images.ctfassets.net/lzny33ho1g45/41O39Z8k4E7prE9ZWxAW32/4a1e95b14399ee52df902c3b7b34e332/image17.png?w=1400&fm=avif
        domains: ["i.imgur.com", "imgur.com", "images.ctfassets.net"],
    }
};

module.exports = nextConfig;
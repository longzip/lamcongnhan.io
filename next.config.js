const allowedImageWordPressDomain = new URL(process.env.WORDPRESS_API_URL).hostname

module.exports = {
    trailingSlash: true,
    /**
     * We specify which domains are allowed to be optimized.
     * This is needed to ensure that external urls can't be abused.
     * @see https://nextjs.org/docs/basic-features/image-optimization#domains
     */
    images: {
        domains: [ allowedImageWordPressDomain, 'i2.wp.com', 'i1.wp.com', 'i0.wp.com' ],
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
          require('./scripts/generate-sitemap')
        }
    
        return config
      },
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://crosstalk.me/eikaiwa-school',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './out',
    exclude: ['/server-sitemap.xml', '/'], // Exclude certain routes
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://crosstalk.me/eikaiwa-school/server-sitemap.xml', // Include sitemap file URL
      ],
    },
    transform: async (config, path) => {
      return {
        loc: path, // The URL of the page
        changefreq: 'monthly', // Frequency of page update
        priority: path === '/eikaiwa-school' ? 1.0 : 0.7, // Homepage gets priority 1, others get 0.7
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined, // Use current date as the last modification date
      }
    },
  }
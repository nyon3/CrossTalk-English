/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://crosstalk.me/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // Other configurations...
  transform: async (config, path) => {
      // You can customize how URLs are added to your sitemap here.
      // For example, you can set a higher priority for your new homepage.
      return {
          loc: path, // The URL of the page
          changefreq: 'monthly', // Frequency of page update
          priority: path === '/eikaiwa-school' ? 1.0 : 0.7, // Homepage gets priority 1, others get 0.7
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined, // Use current date as the last modification date
      }
  },
};

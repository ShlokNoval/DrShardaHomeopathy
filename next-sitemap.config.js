/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://shardahomeopathy.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['/api/*'],
}

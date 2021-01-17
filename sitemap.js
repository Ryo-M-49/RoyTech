const sitemap = require('nextjs-sitemap-generator');

const fs = require('fs');

sitemap({
    baseUrl: 'https://ryo-m.net',
    // If you are using Vercel platform to deploy change the route to /.next/serverless/pages
    pagesDirectory: __dirname + '/.next/server/pages',
    targetDirectory: 'public/',
    ignoredExtensions: ['js', 'map'],
    ignoredPaths: ['assets'], // Exclude everything that isn't static page
});

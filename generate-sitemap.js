const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Create a readable stream from your URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/skills', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more pages as needed
];

const readable = Readable.from(links);

// Create the sitemap stream
const sitemapStream = new SitemapStream({ hostname: 'https://puskarniroula.vercel.app/' });

// Pipe the stream and save the sitemap.xml to a file
streamToPromise(readable.pipe(sitemapStream)).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data);
  console.log('Sitemap generated successfully!');
});

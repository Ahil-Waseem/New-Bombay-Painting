import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Your website domain
const sitemap = new SitemapStream({
    hostname: 'https://newbombaypainting.in',
});

// Add all real routes
const routes = [
    '/',
    '/services',
    '/projects',
    '/blog',
    '/privacy-policy',
    '/terms'
];

// Write each route into sitemap
routes.forEach((url) => {
    sitemap.write({ url });
});

// End sitemap
sitemap.end();

// Save to public folder
streamToPromise(sitemap).then((data) => {
    createWriteStream('./public/sitemap.xml').write(data);
    console.log("✔ Sitemap generated successfully!");
});

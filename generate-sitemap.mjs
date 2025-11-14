import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({
    hostname: 'https://newbombaypainting.in',
});

const routes = [
    '/',
    '/services',
    '/projects',
    '/blog',
    '/privacy-policy',
    '/terms'
];

routes.forEach((route) => {
    sitemap.write({ url: route });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
    createWriteStream('./public/sitemap.xml').write(data);
    console.log("Sitemap generated successfully!");
});

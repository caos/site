import fs from 'fs';

const SEOFILE = 'seo.html';

export default function get_seo(slug) {
    var fileContents;
    try {
        fileContents = fs.readFileSync(`docs/${slug}/${SEOFILE}`, 'utf-8');
    } catch (err) {
        console.error(err);
        fileContents = '';
    }
    return fileContents;
}
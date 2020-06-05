import send from '@polka/send';

import generate_docs from '../utils/generate_docs.js';

let json;

export function get(req, res) {
    if (!json || process.env.NODE_ENV !== 'production') {
        const params = req.params.slug.split(',');
        const [lang, slug] = params;
        // console.log(lang, slug);
        if (!slug) {
            json = JSON.stringify(generate_docs('docs/', lang, '')); // TODO it errors if I send the non-stringified value
        } else {
            json = JSON.stringify(generate_docs('docs/', slug, lang)); // TODO it errors if I send the non-stringified value
        }
    }

    send(res, 200, json, {
        'Content-Type': 'application/json'
    });
}

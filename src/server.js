import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

import { environment } from '../environment.json';
import { i18nMiddleware } from './i18n.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

console.log(environment);

polka()
    .use(
        // environment.basepath,
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        i18nMiddleware(),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });

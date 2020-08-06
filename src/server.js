import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

import { environment } from '../environment.json';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

console.log(environment);

polka()
    .use(
        environment.basepath,
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });

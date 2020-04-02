import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

import { BASEPATH } from '../config';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';


// console.log('gzgz' + BASEPATH);
polka()
    .use(
        // 'site',
        BASEPATH,
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });
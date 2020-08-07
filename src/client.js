import '../static/base.css';

import * as sapper from '@sapper/app';

import { startClient } from './i18n.js';

startClient();
console.log('clientsetter');

sapper.start({
    target: document.querySelector('#sapper')
});

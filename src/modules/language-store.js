import { writable } from 'svelte/store';

export const docLanguages = writable(['de', 'it']);

export function storeValue(lngs) {
    console.log('lngs: ' + lngs);
    docLanguages.set(lngs);
}
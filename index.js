const ar = () => import('./ar');
const de = () => import('./de');
const id = () => import('./id');
const es = () => import('./es');
const fr = () => import('./fr');
const hi = () => import('./hi');
const it = () => import('./it');
const ja = () => import('./ja');
const ko = () => import('./ko');
const nl = () => import('./nl');
const pt = () => import('./pt');
const ru = () => import('./ru');
const zh = () => import('./zh');

import metadata from './metadata';
import enLang from './en'; // always loaded as fallback
const en = () => new Promise((resolve) => resolve(enLang));

export const locales = { ar, de, en, id, fr, hi, es, it, ja, ko, nl, pt, ru, zh };

/**
 * @type {keyof typeof locales}
 */
let initialLocale = 'en';
const fallbackLocale = 'en';
let lastSetup = localStorage.getItem('lang') || '';

/**
 * @param {string} locale
 */
export function getMetadata(locale) {
    if (locale in metadata) {
        // @ts-ignore
        return metadata[locale];
    } else {
        return metadata[fallbackLocale];
    }
}

if (lastSetup in locales) {
    // @ts-ignore
    initialLocale = lastSetup;
}

export const localeConfig = {
    fallbackLocale,
    initialLocale,
};

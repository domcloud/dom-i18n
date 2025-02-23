const ar = () => import('./ar');
const de = () => import('./de');
const es = () => import('./es');
const fr = () => import('./fr');
const hi = () => import('./hi');
const id = () => import('./id');
const it = () => import('./it');
const ja = () => import('./ja');
const ko = () => import('./ko');
const nl = () => import('./nl');
const pt = () => import('./pt');
const ru = () => import('./ru');
const zh = () => import('./zh');

import enLang from './en'; // always loaded as fallback
const en = () => new Promise((resolve) => resolve(enLang));

export const locales = { ar, de, en, es, fr, hi, id, it, ja, ko, nl, pt, ru, zh };

/**
 * @type {keyof typeof locales}
 */
let initialLocale = 'en';

/**
 * @type {'en'}
 */
const fallbackLocale = 'en';
let lastSetup = localStorage.getItem('lang') || '';

if (lastSetup in locales) {
    // @ts-ignore
    initialLocale = lastSetup;
}

export const localeConfig = {
    fallbackLocale,
    initialLocale,
};

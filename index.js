import en from './en';
import id from './id';
import es from './es';

export const currencies = {
    usd: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }),
    idr: new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'idr',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    }),
}

export const locales = { en, id, es };
export const localeConfig = {
    fallbackLocale: 'en',
    initialLocale: 'en',
};

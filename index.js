import de from './de';
import en from './en';
import id from './id';
import es from './es';
import fr from './fr';
import hi from './hi';
import it from './it';
import ja from './ja';
import nl from './nl';
import pt from './pt';
import ru from './ru';
import zh from './zh';

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

export const locales = { de, en, id, fr, hi, es, it, ja, nl, pt, ru, zh };
export const localeConfig = {
    fallbackLocale: 'en',
    initialLocale: 'en',
};

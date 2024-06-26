import ar from './ar';
import de from './de';
import en from './en';
import id from './id';
import es from './es';
import fr from './fr';
import hi from './hi';
import it from './it';
import ja from './ja';
import ko from './ko';
import nl from './nl';
import pt from './pt';
import ru from './ru';
import zh from './zh';

export const locales = { ar, de, en, id, fr, hi, es, it, ja, ko, nl, pt, ru, zh };

let lastSetup = localStorage.getItem('lang') || '';
/**
 * @type {keyof typeof locales}
 */
let initialLocale = 'en';

if (lastSetup in locales) {
    // @ts-ignore
    initialLocale = lastSetup;
}

export const localeConfig = {
    fallbackLocale: 'en',
    initialLocale,
};

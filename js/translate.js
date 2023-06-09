import i18next from 'i18next';
import locI18next from 'loc-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from '../translation/fr.json';
import en from '../translation/en.json';

i18next.init({
    debug: true,
    resources: {
        en: {
            translation: en,
        },
        fr: {
            translation: fr,
        },
    },
});

i18next.use(LanguageDetector).init({
    order: ['localStorage'],
});

const localize = locI18next.init(i18next, {
    selectorAttr: 'data-i18n',
    targetAttr: 'i18n-target',
    optionsAttr: 'i18n-options',
    useOptionsAttr: false,
    parseDefaultValueFromContent: true
});

window.addEventListener('DOMContentLoaded', eventLoaded => {
    localize("body");

    const selectElement = document.querySelector('.languageSelector');

    selectElement.value = i18next.language;

    document
        .querySelectorAll('select.languageSelector')
        .forEach(select => {
            select.addEventListener('change', event => {
                i18next.changeLanguage(event.target.value);
                localize("body");
            });
        });
});
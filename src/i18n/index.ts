import i18n from "i18next";
import enTranslation from "./en.json";
import esTranslation from "./es.json";

export const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
};
export const DEFAULT_LOCALE = LANGUAGES.SPANISH;
export const LOCALES = [LANGUAGES.ENGLISH, LANGUAGES.SPANISH];

i18n.init({
  lng: DEFAULT_LOCALE,
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
});

import { createI18n } from "vue-i18n";

// Utility function to dynamically import all JSON files from a given directory
function loadLocaleMessages() {
  const locales = import.meta.glob("./locales/*/*.json", { eager: true });
  const messages: Record<string, any> = {};

  for (const path in locales) {
    const matched = path.match(/\.\/locales\/([a-z]+)\/(.+)\.json$/);
    if (matched) {
      const [, locale, section] = matched;

      if (!messages[locale]) {
        messages[locale] = {};
      }

      if (!messages[locale][section]) {
        messages[locale][section] = locales[path];
      }
    }
  }

  return messages;
}

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});

export default i18n;

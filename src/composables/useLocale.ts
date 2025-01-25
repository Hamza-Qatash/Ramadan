import { useI18n } from "vue-i18n";
import { useStorage } from "@vueuse/core";
import { LANGUAGE_KEY } from "@/constants/lang";

export function useLocale() {
  const storedLocale = useStorage(
    LANGUAGE_KEY,
    localStorage.getItem(LANGUAGE_KEY) || "en"
  );
  const { locale } = useI18n();

  const setLanguageAndDirection = (newLocale: string) => {
    // Update the i18n locale and storedLocale
    locale.value = newLocale;
    storedLocale.value = newLocale;

    // Set the page direction based on the language
    const direction = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", newLocale);
  };

  const initLanguage = () => {
    setLanguageAndDirection(storedLocale.value);
  };

  const changeLanguage = (newLocale: string) => {
    setLanguageAndDirection(newLocale);
  };

  // Initialize language and direction on load
  initLanguage();

  return {
    locale,
    changeLanguage,
    initLanguage,
  };
}

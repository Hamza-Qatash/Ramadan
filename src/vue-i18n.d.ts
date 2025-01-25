import "vue-i18n";

declare module "vue" {
  interface ComponentCustomProperties {
    $t: typeof import("vue-i18n").TranslateFunction;
    $i18n: import("vue-i18n").I18n; // Optional: If you need access to the i18n instance
  }
}

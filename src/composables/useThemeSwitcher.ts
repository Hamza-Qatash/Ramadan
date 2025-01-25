import { onMounted, watchEffect } from "vue";
import { useStorage } from "@vueuse/core";
import { THEME_KEY } from "@/constants/index";

export function useThemeSwitcher() {
  const theme = useStorage<"dark" | "light">(THEME_KEY, null);

  const applyTheme = (newTheme) => {
    const html = document.documentElement;

    if (newTheme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  onMounted(() => {
    if (!theme.value) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      theme.value = prefersDark ? "dark" : "light";
    }
    applyTheme(theme.value);
  });

  watchEffect(() => {
    if (theme.value) {
      applyTheme(theme.value);
    }
  });

  return {
    theme,
    toggleTheme,
  };
}

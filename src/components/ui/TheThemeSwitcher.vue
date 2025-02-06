<template>
  <div
    :class="{ dark: theme === 'dark' }"
    class="theme-container flex items-center justify-center transition-colors duration-300"
  >
    <button
      title="Toggle Theme"
      @click="toggleTheme"
      class="p-2 rounded-lg bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      <ThemeIcon class="transition-all duration-300" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useThemeSwitcher } from "@/composables/useThemeSwitcher";
import ThemeIcon from "@/assets/icons/theme-icon.svg";

// Theme logic
const { theme, toggleTheme } = useThemeSwitcher();
</script>

<style lang="scss">
.theme-container svg {
  transition: stroke var(--transition-duration);
  stroke: rgb(var(--black));
}

.theme-container .moon-icon {
  stroke-dasharray: 0px 1px;
  opacity: 0;
  transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
}

.theme-container .sun-icon {
  stroke-dasharray: 1px 1px;
  opacity: 1;
  transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
}

.theme-container.dark .moon-icon {
  stroke-dasharray: 1px 1px;
  opacity: 1;
}

.theme-container.dark .sun-icon {
  stroke-dasharray: 0px 1px;
  opacity: 0;
}
</style>

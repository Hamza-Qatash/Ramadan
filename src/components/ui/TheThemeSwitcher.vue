<template>
  <div :class="{ dark: theme === 'dark' }" class="theme-container">
    <button title="Toggle Theme" @click="toggleTheme">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <!-- Moon -->
        <path
          pathLength="1"
          class="moon-icon"
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        ></path>
        <!-- Sun -->
        <circle pathLength="1" class="sun-icon" cx="12" cy="12" r="5"></circle>
        <line
          pathLength="1"
          class="sun-icon"
          x1="12"
          y1="1"
          x2="12"
          y2="3"
        ></line>
        <line
          pathLength="1"
          class="sun-icon"
          x1="12"
          y1="21"
          x2="12"
          y2="23"
        ></line>
        <line
          pathLength="1"
          class="sun-icon"
          x1="4.22"
          y1="4.22"
          x2="5.64"
          y2="5.64"
        ></line>
        <line
          pathLength="1"
          class="sun-icon"
          x1="18.36"
          y1="18.36"
          x2="19.78"
          y2="19.78"
        ></line>
        <line
          pathLength="1"
          class="sun-icon"
          x1="1"
          y1="12"
          x2="3"
          y2="12"
        ></line>
        <line
          pathLength="1"
          class="sun-icon"
          x1="21"
          y1="12"
          x2="23"
          y2="12"
        ></line>
        <line
          pathLength="1"
          class="sun-icon"
          x1="4.22"
          y1="19.78"
          x2="5.64"
          y2="18.36"
        ></line>
        <line
          pathLength="1"
          class="sun-icon"
          x1="18.36"
          y1="5.64"
          x2="19.78"
          y2="4.22"
        ></line>
      </svg>
    </button>
  </div>
</template>

<script setup>
// Import components
import { useThemeSwitcher } from "@/composables/useThemeSwitcher";

// Theme logic
const { theme, toggleTheme } = useThemeSwitcher();
</script>

<style scoped>
button {
  border: none;
  background-color: inherit;
  cursor: pointer;
  border-radius: 9px;
}

.theme-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--black));
  transition: color, background-color var(--transition-duration);
}

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

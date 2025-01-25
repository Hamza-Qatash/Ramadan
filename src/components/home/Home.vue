<template>
  <div class="mt-24">
    <div class="grid max-w-xl gap-8">
      <h1
        :class="`main__title glowing__shadow--secondary animation-delay-${
          (menuItemsLength + 2) * 200
        }`"
      >
        {{ $t("messages.happy_ramadan") }}
      </h1>
      <p
        :class="`main__text glowing__shadow--primary animation-delay-${
          (menuItemsLength + 3) * 200
        }`"
      >
        {{ $t("messages.lorem_ipsum") }}
      </p>
      <button
        :class="`main__btn glowing__shadow--secondary animation-delay-${
          (menuItemsLength + 4) * 200
        }`"
        @click="handleButtonClick"
      >
        {{ $t("actions.read_more") }}
      </button>
      <ul class="flex items-center gap-3 pb-3">
        <li v-for="(icon, index) in socialIcons" :key="icon.name">
          <a
            :href="icon.link"
            :class="`main__icon animation-delay-${
              (index + menuItemsLength + 5) * 200
            }`"
          >
            <img :src="icon.src" :alt="icon.name" class="invert-[1] scale-50" />
          </a>
        </li>
      </ul>
    </div>
    <img
      :src="themeBasedImage"
      alt="mosque"
      :class="[
        'mosque',
        `animation-delay-${(menuItemsLength + socialIconsLength + 6) * 200}`,
        { 'scale-x-[-1]': locale === 'ar' },
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
// Import core Vue functionalities
import { computed } from "vue";

// Import core utilities and composables
import { storeToRefs } from "pinia";

// Import Pinia stores
import { useSocialIconsStore } from "@/stores/socialIconsStore.ts";
import { useNavigationStore } from "@/stores/navigationStore.ts";

// Import composables
import { useLocale } from "@/composables/useLocale";
import { useThemeSwitcher } from "@/composables/useThemeSwitcher";

// import images
import darkMosque from "@/assets/images/mosque-dark.png";
import lightMosque from "@/assets/images/mosque-light.jpg";

// Social icons logic
const socialIconsStore = useSocialIconsStore();
const { socialIconsLength, socialIcons } = storeToRefs(socialIconsStore);

// Navigation logic
const navigationStore = useNavigationStore();
const { menuItemsLength } = storeToRefs(navigationStore);

// Localization logic
const { locale } = useLocale();

// Handlers
const handleButtonClick = () => {
  console.log("Button clicked!");
};

// Theme management
const { theme } = useThemeSwitcher();

// Theme-based Image Source
const themeBasedImage = computed(() =>
  theme.value === "dark" ? darkMosque : lightMosque
);
</script>

<style lang="scss" scoped>
.main__title {
  @apply text-6xl font-bold opacity-0 text-secondary animate-slide_right;
}
.main__text {
  @apply text-black text-xl text-justify opacity-0 animate-slide_left;
  /* text-shadow: rgba(255, 255, 255, 0.5) 0px 3px 3px; */
  /* text-shadow: 
    0 0 5px rgb(var(--glow-primary)),
    0 0 10px rgb(var(--glow-primary)),
    0 0 15px rgb(var(--glow-primary)),
    0 0 20px rgb(var(--glow-primary)),
    0 0 25px rgb(var(--glow-primary)); */
}
.main__btn {
  @apply px-8 opacity-0 py-4 text-xl font-bold text-white w-fit bg-primary rounded-[40px] hover:bg-secondary transition animate-slide_top;
}
.main__icon {
  @apply bg-secondary opacity-0 animate-slide_right hover:bg-primary transition flex justify-center items-center w-12 h-12 rounded-[50%];
}
.mosque {
  @apply absolute bottom-0 end-0 z-[-1] max-w-3xl opacity-0 animate-fade_in;
}
</style>

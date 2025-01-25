<template>
  <header class="pt-8 xl:px-4">
    <div class="flex items-center justify-between">
      <div class="header__title glowing__shadow--primary">
        {{ $t("messages.ramadan") }}
      </div>

      <TheBurgerMenu
        :class="[
          'md:hidden opacity-0 animate-slide_right animation-delay-600',
          { 'menu-open': isMenuOpen },
        ]"
        @click="toggleMenu"
      />

      <div class="items-center content-center hidden gap-7 md:flex">
        <!-- Desktop Menu -->
        <ul class="flex justify-center gap-0 lg:gap-5">
          <li
            v-for="(item, index) in getMenuItems"
            :key="item.name"
            :class="[
              { active: route.path === item.path },
              `animation-delay-${(index + 1) * 200}`,
              'glowing__shadow--secondary',
            ]"
          >
            {{ $t(`navigation.${item.name}`) }}
          </li>
        </ul>

        <!-- Toggle language -->
        <div
          :class="`toggle__Language glowing__shadow--secondary animation-delay-${
            (menuItemsLength + 0.5) * 200
          }`"
          @click="toggleLanguage"
        >
          {{ oppositeLocale }}
        </div>

        <!-- Toggle theme -->
        <div
          :class="`opacity-0 animate-slide_left animation-delay-${
            (menuItemsLength + 2) * 200
          }`"
        >
          <TheThemeSwitcher />
        </div>
      </div>

      <!-- Mobile Menu -->
      <ul :class="[!isMenuOpen ? 'hidden' : 'flex', 'mobile__menu']">
        <li
          v-for="(item, index) in getMenuItems"
          :key="item.name"
          @click="closeMenu"
          :class="[
            { active: route.path === item.path },
            `animation-delay-${(index + 1) * 200}`,
          ]"
        >
          {{ $t(`navigation.${item.name}`) }}
        </li>

        <!-- Toggle language -->
        <div
          :class="`toggle__Language animation-delay-${
            (menuItemsLength + 0.5) * 200
          }`"
          @click="
            toggleLanguage();
            closeMenu();
          "
        >
          {{ oppositeLocale }}
        </div>

        <!-- Toggle theme -->
        <div
          :class="`opacity-0 animate-slide_left animation-delay-${
            (menuItemsLength + 2) * 200
          }`"
        >
          <TheThemeSwitcher />
        </div>
      </ul>
    </div>
  </header>
</template>

<script lang="ts" setup>
// Import core Vue functionalities
import { computed } from "vue";

// Import components
import TheBurgerMenu from "@/components/layout/TheBurgerMenu.vue";
import TheThemeSwitcher from "@/components/ui/TheThemeSwitcher.vue";

// Import third-party libraries
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

// Import Pinia stores
import { useMobileMenuStore } from "@/stores/mobileMenu.ts";
import { useNavigationStore } from "@/stores/navigationStore.ts";

// Import composables
import { useLocale } from "@/composables/useLocale";

// Mobile menu logic
const mobileStore = useMobileMenuStore();
const { isMenuOpen } = storeToRefs(mobileStore);
const { closeMenu, toggleMenu } = mobileStore;

// Navigation logic
const navigationStore = useNavigationStore();
const { menuItemsLength, getMenuItems } = storeToRefs(navigationStore);

// Route logic
const route = useRoute();

// Localization logic
const { locale, changeLanguage } = useLocale();
const oppositeLocale = computed(() => (locale.value === "ar" ? "en" : "ar"));

const toggleLanguage = () => {
  const newLocale = locale.value === "ar" ? "en" : "ar";
  changeLanguage(newLocale);
};
</script>

<style lang="scss" scoped>
.header__title {
  @apply text-primary text-2xl font-extrabold opacity-0 animate-slide_left animation-delay-100;
}

ul li {
  @apply text-secondary rounded-[30px] font-semibold text-[1.1rem] px-[18px] py-2 opacity-0 animate-slide_top cursor-pointer transition duration-500;

  &:hover,
  &.active {
    @apply bg-secondary text-white;
  }
}

.toggle__Language {
  @apply flex items-center justify-center w-12 h-8 text-white rounded-full cursor-pointer bg-primary opacity-0 animate-slide_left;
}

.mobile__menu {
  @apply absolute inset-0 z-10 flex-col items-center justify-center w-screen h-screen gap-5 bg-white md:hidden;
}
</style>

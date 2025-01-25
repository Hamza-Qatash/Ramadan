import { defineStore } from "pinia";
import type { MobileMenuState } from "@/types/mobileMenu.types.ts";

export const useMobileMenuStore = defineStore("mobileMenu", {
  state: (): MobileMenuState => ({
    isOpen: false,
  }),

  getters: {
    isMenuOpen: (state): boolean => state.isOpen,
  },

  actions: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    openMenu() {
      this.isOpen = true;
    },
  },
});

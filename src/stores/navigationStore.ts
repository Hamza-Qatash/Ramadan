import { defineStore } from "pinia";
import type { NavigationState, MenuItem } from "@/types/navigation.types.ts";

export const useNavigationStore = defineStore("navigation", {
  // Typed state
  state: (): NavigationState => ({
    menuItems: [
      { name: "home", path: "/" },
      { name: "about", path: "/about" },
      { name: "calendar", path: "/calendar" },
      { name: "blog", path: "/blog" },
      { name: "contact", path: "/contact" },
    ],
  }),

  getters: {
    getMenuItems: (state): MenuItem[] => state.menuItems,
    menuItemsLength: (state): number => state.menuItems.length,
  },
});

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { MenuItem } from "@/types/navigation.types.ts";
import {
  MENU_ITEM_HOME,
  MENU_ITEM_ABOUT,
  MENU_ITEM_CALENDAR,
  MENU_ITEM_BLOG,
  MENU_ITEM_CONTACT,
} from "@/constants/menuItems";

export const useNavigationStore = defineStore("navigation", () => {

  const menuItems = ref<MenuItem[]>([
    { name: MENU_ITEM_HOME, path: "/" },
    { name: MENU_ITEM_ABOUT, path: "/about" },
    { name: MENU_ITEM_CALENDAR, path: "/calendar" },
    { name: MENU_ITEM_BLOG, path: "/blog" },
    { name: MENU_ITEM_CONTACT, path: "/contact" },
  ]);

  const menuItemsLength = computed(() => menuItems.value.length);

  return { menuItems, menuItemsLength };
});

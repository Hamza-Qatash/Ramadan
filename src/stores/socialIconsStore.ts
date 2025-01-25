import { defineStore } from "pinia";
import type { SocialIcon } from "@/types/socialIcon.types.ts";

import facebookIcon from "@/assets/images/facebook.png";
import twitterIcon from "@/assets/images/twitter.png";
import instagramIcon from "@/assets/images/instagram.png";

export const useSocialIconsStore = defineStore("socialIcons", {
  state: () => ({
    socialIcons: [
      { name: "Facebook", link: "#", src: facebookIcon, delay: 1800 },
      { name: "Twitter", link: "#", src: twitterIcon, delay: 2000 },
      { name: "Instagram", link: "#", src: instagramIcon, delay: 2200 },
    ] as SocialIcon[],
  }),
  getters: {
    getSocialIcons: (state) => state.socialIcons,
    socialIconsLength: (state): number => state.socialIcons.length,
  },
});

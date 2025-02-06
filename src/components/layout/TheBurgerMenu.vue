<template>
  <div class="relative z-20">
    <svg
      :class="[
        'burger__menu--svg',
        locale === 'ar' ? 'scale-x-[1]' : 'scale-x-[-1]',
      ]"
    >
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        class="top"
        shape-rendering="crispEdges"
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        class="middle"
        shape-rendering="crispEdges"
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        class="bottom"
        shape-rendering="crispEdges"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
// Import composables
import { useLocale } from "@/composables/useLocale";

// Localization logic
const { locale } = useLocale();
</script>

<style lang="scss" scoped>
.burger__menu--svg {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.burger__menu--svg line {
  stroke: rgb(var(--black));
  stroke-dasharray: 100%;
  stroke-dashoffset: 0%;
  transition: transform 0.3s, stroke-dashoffset 0.4s;
  transform-origin: center;
  stroke-width: 3px;
}

.burger__menu--svg .top {
  transform: translateY(-35%);
  -webkit-transform: translateY(-35%);
  -moz-transform: translateY(35%);
  -ms-transform: translateY(35%);
  -o-transform: translateY(35%);
}

.burger__menu--svg .middle {
  transform: scaleX(1);
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transition: opacity 0.3s, transform 0.3s;
  -webkit-transition: opacity 0.3s, transform 0.3s;
  -moz-transition: opacity 0.3s, transform 0.3s;
  -ms-transition: opacity 0.3s, transform 0.3s;
  -o-transition: opacity 0.3s, transform 0.3s;
}

.burger__menu--svg .bottom {
  transform: translateY(33%);
  -webkit-transform: translateY(33%);
  -moz-transform: translateY(33%);
  -ms-transform: translateY(33%);
  -o-transform: translateY(33%);
  stroke-dasharray: 100%;
  stroke-dashoffset: 9px;
}
.burger__menu--svg:hover .bottom {
  stroke-dashoffset: 0%;
}
/*** Mode Croix ***/
.menu-open .burger__menu--svg .top {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  stroke-linecap: round;
}

.menu-open .burger__menu--svg .middle {
  transform: scaleX(0.1);
  -webkit-transform: scaleX(0.1);
  -moz-transform: scaleX(0.1);
  -ms-transform: scaleX(0.1);
  -o-transform: scaleX(0.1);
  opacity: 0;
}

.menu-open .burger__menu--svg line.bottom {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  stroke-linecap: round;
}

.menu-open .burger__menu--svg .bottom {
  stroke-dashoffset: 0%;
}
</style>

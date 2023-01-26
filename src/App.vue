<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const clicked = ref(false);

const toggleMenu = () => {
  if (clicked.value === false) {
    clicked.value = true;
  } else {
    clicked.value = false;
  }
};
</script>

<template>

  <header class="py-6 bg-black">
    <div class="container mx-auto px-2 max-w-[1200px]">
      <nav
        class="flex md:justify-between flex-col md:flex-row items-center relative"
      >
        <RouterLink
          to="/"
          class="font-noto-sans text-white text-xl font-semibold"
          ><img
            class="h-12 w-64 object-cover hidden md:block"
            src="src/assets/images/marvel-studios-white-logo-png-image-11662677383kpctrvmd0e.png "
        /></RouterLink>

        <ul
          class="flex flex-col hide-menu md:translate-y-0 md:flex md:flex-row"
          :class="{ active: clicked === true }"
        >
          <li class="pb-4 md:px-2 md:py-0">
            <RouterLink
              to="/"
              class="font-noto-sans text-white text-xl font-semibold"
              >Home</RouterLink
            >
          </li>
          <li class="pb-4 md:px-2 md:py-0">
            <RouterLink
              to="/comics"
              class="font-noto-sans text-white text-xl font-semibold"
              >Comics</RouterLink
            >
          </li>
          <li class="pb-4 md:px-2 md:py-0">
            <RouterLink
              to="/characters"
              class="font-noto-sans text-white text-xl font-semibold"
              >Characters</RouterLink
            >
          </li>
        </ul>
        <div
          class="humber-box block absolute md:hidden top-0 right-0"
          @click="toggleMenu"
        >
          <svg
            class="w-auto h-7 fill-white"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

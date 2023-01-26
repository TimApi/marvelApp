<script setup lang="ts">
import { ref, onMounted } from "vue";

export interface propsComic {
  title?: string;
  description?: string | null;
  clicked?: boolean;
  thumbnail?: {
    path: string;
    extension: string;
  };
  characters?: {
    available: number;
    collectionURI: string;
    items: [];
    returned: number;
  };
  events?: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
    }
}

const props = defineProps<propsComic>();
const emit = defineEmits<{
  (e: 'togglemenu', menu: boolean): void
}>()
</script>

<template>
  <div class="container mx-auto px-2 max-w-[1200px]">
    <div class="flex flex-col md:flex-row rounded-lg md:max-h-[530px] my-6">
      <div class="w-full  md:w-[50%] shadow-lg">
        <div class="p-4 flex flex-col h-full">
        <span class="font-noto-sans font-semibold text-xl mb-1">Title</span>
        <p class="text-black font-noto-sans mb-1">{{ props.title }}</p>
        <span class="font-noto-sans font-semibold text-xl mb-1">Description</span>
        <p class="text-black font-noto-sans mb-1">{{ props.description }}</p>
        <span class="font-noto-sans font-semibold text-xl mb-1">Characters available</span>
        <p class="text-black font-noto-sans mb-1">{{ props.characters.available }}</p>
        <span class="font-noto-sans font-semibold text-xl mb-1">Events available</span>
        <p class="text-black font-noto-sans mb-1">{{ props.events.available }}</p>
        <button class="bg-YellowC p-2 border-r-xl rounded-md cursor-pointer hover:shadow-lg mt-auto w-fit" @click="emit('togglemenu', false)">Terug naar Comics</button>
        </div>
      </div>
      <div class="w-full md:w-[50%]">
        <img
          class="w-full object-cover h-full"
          :src="`${props.thumbnail.path}/portrait_xlarge.jpg`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

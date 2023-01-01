<script setup lang="ts">
import { ref, onMounted } from "vue";
import Comic from "@/components/Comic.vue"
import comicsService from "@/services/comicsService";
import type { comicsInterface } from "../interfaces/comicsInterface";

const comicsData = ref<comicsInterface>({});
const singleComic = ref()
const clicked = ref(false);

onMounted(() => {
  getAllComics(20);
});

const getAllComics = (comicsamout: number) => {
  comicsService.getComics(comicsamout).then((comicsdata) => {
    console.log(comicsdata);
    comicsData.value = comicsdata.data.data.results;
  });
};

const storeComic = (comic: {}) => {
    console.log(comic)
    singleComic.value = comic
}

</script>

<template>
  <section class="bg-black py-8" v-if="!clicked">
    <div class="container mx-auto px-2">
      <ul class="flex flex-wrap">
        <li class="w-full md:w-[33.33%] mb-4 md:pr-4 cursor-pointer" v-for="(comic, index) in comicsData" :key="index">
            <img class="w-full max-h-[200px] object-cover" :src="`${comic.thumbnail.path}/portrait_xlarge.jpg`" alt="" />
            <div class="bg-DarkPurpleC p-2">
            <p class="text-white font-noto-sans">{{ comic.title }}</p>
            <button class="bg-white p-2  mt-4 rounded-2xl text-black cursor-pointer hover:shadow-lg" @click="clicked = clicked ? false : true, storeComic({...comic})">Meer info</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section v-if="clicked">
    <Comic 
        :title="singleComic.title"
        :clicked="clicked"
        :description="singleComic.description"
        :thumbnail="singleComic.thumbnail"
        :characters="singleComic.characters"
        :events="singleComic.events"
     />
  </section>
</template>

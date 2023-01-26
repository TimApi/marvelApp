<script setup lang="ts">
import { ref, onMounted } from "vue";
import comicsService from "@/services/comicsService";
import type { comicsInterface } from "../interfaces/comicsInterface";
import type { seriesInterface } from "@/interfaces/seriesInterface";
import type { storyInterface } from "@/interfaces/storysInterface";
import Footer from "@/components/Footer.vue";
import Swiper from "../components/swiper.vue"
import gsap from "gsap";
import SplitType from "split-type";


const comicsData = ref<comicsInterface[]>();
const serieData = ref<seriesInterface[]>();
const storyData = ref<storyInterface[]>();
const text = new SplitType('#my-text');
const toggleAnimation = ref(false);


onMounted(() => {
  getAllComics(5);
  getallSeries();
  getallStories();
  gsap.to('.tranistion-img', {
    duration: 1,
    y: 0,
    ease: "bounce",
  })
  gsap.to('.btn',
   {
    duration: 2,
    delay: 1,
    ease: 'slow',
    autoAlpha: 1,
  })
});

const getAllComics = (comicsamout: number) => {
  comicsService.getComics(comicsamout).then((comicsdata) => {
    console.log(comicsdata);
    comicsData.value = comicsdata.data.data.results;
    console.log(comicsData.value);
  });
};


const hideanimation = () => {
  gsap.to('.tranistion-img', {
    duration: 1,
    y: -500,
    ease: "bounce",
  })
  gsap.to('.btn',
   {
    duration: 2,
    ease: 'slow',
    autoAlpha: 0,
  })
  gsap.to('.bg-animation', {
    opacity: 0,
    duration: 3,
    display: 'none',
  })
}

const getallSeries = () => {
  comicsService.getSeries().then((seriesdata) => {
    console.log(seriesdata);
    serieData.value = seriesdata.data.data.results;
  });
};

const getallStories = () => {
  comicsService.getStories().then((storiesdata) => {
    console.log(storiesdata);
    storyData.value = storiesdata.data.data.results;
  });
};
</script>

<template>
  <div :class="[{ hidden: toggleAnimation }]" class="absolute inset-0 bg-animation bg-black min-h-screen h-screen">
    <img src="./../assets/images/Marvel_Logo.svg.png" class="w-[100%] tranistion-img z-10 h-auto max-h-[500px] object-cover p-8 translate-y-[-100%]" />
    <h1 id="my-text" class="text-white z-10 p-8 font-noto-sans text-xl md:text-6xl text-white mb-4 font-semibold animation-text">
      Marvel
    </h1>
    <button @click="hideanimation" class="bg-white btn p-2 invisible mt-4 rounded-2xl text-black cursor-pointer hover:shadow-lg m-8">Ga naar de website</button>
  </div>
  <div
    class="bg-hero-img bg-no-repeat bg-cover h-2/4 h-[300px] md:h-[800px] mt-[-120px] pt-[300px]"
  >
    <section>
      <div class="container mx-auto px-2 max-w-[1200px]">
        <div class="flex justify-center items-center flex-col">
          <h1
            class="font-noto-sans text-xl md:text-6xl text-white mb-4 font-semibold"
          >
            Marvel studios
          </h1>
          <div class="flex">
            <button
              class="bg-DarkPurpleC p-2 border-r-xl text-white rounded-md cursor-pointer hover:shadow-lg mt-auto w-fit font-semibold"
            >
              Lees meer
            </button>
            <button
              class="bg-DarkPurpleC p-2 border-r-xl text-white rounded-md cursor-pointer hover:shadow-lg mt-auto w-fit ml-3 font-semibold"
            >
              Lees meer
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-32">
      <div class="container mx-auto px-2 max-w-[1200px]">
        <h2
          class="font-noto-sans text-5xl text-center mb-4 text-DarkPurpleC font-semibold"
        >
          Comics
        </h2>
        <ul class="flex flex-wrap justify-center">
          <li
            class="pb-5 pr-5 m-0"
            v-for="(comic, index) in comicsData"
            :key="index"
          >
            <div
              class="bg-GrayC p-3 max-w-[200px] flex flex-col h-full rounded-2xl hover:shadow-lg cursor-pointer"
            >
              <img
                :src="`${comic.thumbnail.path}/portrait_xlarge.jpg`"
                alt=""
              />
              <p class="text-DarkPurpleC font-noto-sans">{{ comic.title }}</p>
            </div>
          </li>
        </ul>
        <div class="flex justify-center">
          <RouterLink to="/comics"
            ><button
              class="bg-DarkPurpleC p-2 rounded-2xl text-GrayC cursor-pointer hover:shadow-lg"
            >
              Meer comics
            </button></RouterLink
          >
        </div>
      </div>
    </section>
    <section class="bg-knight-img min-h-[500px] bg-no-repeat bg-cover mt-10 max-w-[1200px]">
      <div class="container mx-auto px-2">
        <div class="py-10">
          <h2
            class="font-noto-sans text-5xl text-center mb-7 text-DarkPurpleC font-semibold"
          >
            Series
          </h2>
          <ul class="flex flex-wrap">
            <li
              v-for="(serie, index) in serieData"
              :key="index"
              class="mb-4 w-[100%] md:w-[50%] pl-5 lg:w-[33.33%]"
            >
              <div
                class="flex bg-DarkPurpleC hover:shadow-lg rounded-2xl cursor-pointer"
              >
                <div>
                  <img
                    :src="`${serie.thumbnail.path}/portrait_xlarge.jpg`"
                    :alt="serie.thumbnail.path"
                    class="max-h-[120px] rounded-tl-xl rounded-bl-xl"
                  />
                </div>
                <div class="ml-3 mt-4">
                  <p class="font-noto-sans text-white">{{ serie.title }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="bg-black">
      <div class="container mx-auto px-2 max-w-[1200px]">
        <div class="py-10">
          <h2
            class="font-noto-sans text-5xl text-center mb-7 text-white font-semibold"
          >
            quotes
          </h2>
          <div class="grid grid-cols-12">
            <!-- <pre class="w-screen p-9">
                {{storyData}}
              </pre> -->
            <div class="col-span-12 md:col-span-8">
              <ul class="flex flex-wrap flex-row">
                <li
                  class="w-full md:w-[33.33%] mr-6 mb-6"
                  v-for="(story, index) in storyData"
                  :key="index"
                >
                  <img
                    class="h-[200px] w-full m-0"
                    src="src/assets/images/stan-lee.jpeg"
                    alt=""
                  />
                  <p class="font-noto-sans text-white mt-4">
                    {{ story.title }}
                  </p>
                </li>
              </ul>
            </div>
            <div
              class="col-span-12 md:col-span-4 m-height-[400px] md:m-height-0"
            >
              <img
                src="src/assets/images/knight-arm-down.jpeg"
                class="rounded-2xl h-full object-cover"
                alt="knight arm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Swiper />
    <Footer />
  </div>
</template>

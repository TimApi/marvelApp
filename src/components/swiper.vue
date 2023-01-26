<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = (swiper) => {
        console.log(swiper);
};

const onSlideChange = () => {
        console.log('slide change');
};




</script>

<template>
  <div class="container mx-auto px-2 max-w-[1200px]">
    <div class="my-4">
    <swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide >
        <div>
            <img src="../assets/images/knight.jpg" class="max-h-[200px] object-cover w-full" />
            <div class="p-4 mb-10 bg-black rounded-bl-lg  rounded-br-lg">
                <h1 class="font-sans font-semibold text-white text-lg  md:text-xl">Title</h1>
                <p class="font-sans  text-white text-base md:text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum suscipit aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu malesuada velit, sed rutrum lacus.</p>
            </div>
        </div>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper>
    </div>
  </div>
</template>

<style>



    .swiper-button-prev,.swiper-button-next  {
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    background-color: #7E3ABF !important;
    }

    .swiper-button-prev::after ,.swiper-button-next::after {
        font-size: 20px;
        color: white;
        
    }

    .swiper-pagination-bullet {
        background-color: #7E3ABF  !important;
        width: 15px;
        height: 15px;
    }

    .swiper-scrollbar {
        display: none;
    }

</style>
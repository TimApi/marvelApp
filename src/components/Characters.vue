<script setup lang="ts">
import { ref, onMounted } from "vue";
import comicsService from "@/services/comicsService";
import type { characterInterface } from "@/interfaces/charactersInterface";

const storeCharacters = ref<characterInterface>({});

onMounted(() => {
  getallCharacters();
});

const getallCharacters = () => {
  comicsService.getCharacters().then((charactersdata) => {
    console.log(charactersdata);
    storeCharacters.value = charactersdata.data.data.results;
  });
};
</script>

<template>
  <div class="container mx-auto px-2">
    <div class="py-8">
      <ul class="flex flex-wrap">
        <li
          class="w-full md:w-[33.33%] mr-2 shadow-lg mb-2 flex flex-col"
          v-for="(character, index) in storeCharacters"
          :key="index"
        >
            <img
              class="w-full max-h-[200px] object-cover rounded-tl-lg rounded-tr-lg"
              :src="`${character.thumbnail.path}/portrait_xlarge.jpg `"
              alt=""
            />
            <div class="p-4 bg-LightPurpleC flex flex-col">
              <p>{{ character.name }}</p>
              <p>{{ character.description }}</p>
              <button class="bg-YellowC p-2 border-r-xl text-white rounded-md cursor-pointer hover:shadow-lg mt-auto w-fit">Lees meer</button>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

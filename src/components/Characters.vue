<script setup lang="ts">
import { ref, onMounted } from "vue";
import Character from "@/components/Character.vue";
import comicsService from "@/services/comicsService";
import type { characterInterface } from "@/interfaces/charactersInterface";
import type {  character } from "@/components/Character.vue"

const storeCharacters = ref<characterInterface[]>();
const storeCharacter = ref<character>()
const characterMenu = ref(false) 

console.log(characterMenu.value)

onMounted(() => {
  getallCharacters();
});

const getallCharacters = () => {
  comicsService.getCharacters().then((charactersdata) => {
    console.log(charactersdata);
    storeCharacters.value = charactersdata.data.data.results;
  });
};

const storeSingleCharacter = (character: character) => {
  console.log(character)
  storeCharacter.value = character
}

const checkmenu = (value: boolean) => {
  if(!value) { characterMenu.value = false}
}
</script>

<template>

  <div class="container mx-auto px-2 max-w-[1200px]">
    <div class="py-8" v-if="!characterMenu">
      <ul class="flex flex-wrap">
        <li
          class="w-full md:w-[33.33%] pr-2 shadow-lg mb-2 flex flex-col"
          v-for="(character, index) in storeCharacters"
          :key="index"
        >
            <img
              class="w-full max-h-[200px] object-cover rounded-tl-lg rounded-tr-lg"
              :src="`${character.thumbnail.path}/portrait_xlarge.jpg `"
              alt=""
            />
            <div class="p-4 bg-GrayC h-full flex flex-col">
              <p>{{ character.name }}</p>
              <p>{{ character.description }}</p>
              <button class="bg-YellowC p-2 border-r-xl text-white rounded-md cursor-pointer hover:shadow-lg mt-auto w-fit" @click="storeSingleCharacter({...character as object}), characterMenu === false ? characterMenu = true : characterMenu = false">Lees meer</button>
            </div>
        </li>
      </ul>
    </div>
    <Character v-else
      @togglemenu="checkmenu"
      :name="storeCharacter?.name"
      :description="storeCharacter?.description" 
      :thumbnail="storeCharacter?.thumbnail"
      :comics="storeCharacter?.comics"
    />
  </div>
</template>

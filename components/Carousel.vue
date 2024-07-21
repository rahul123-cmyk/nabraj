<template>
  <v-carousel
    height="600"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in carouselStore.slides"
      :key="i" >
      <v-sheet
      
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
          <img :src="slide.logo" alt="">
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup>
import {  useCarouselStore} from "~/store/carousel";
const carouselStore =useCarouselStore();
await carouselStore.getslides();
</script>
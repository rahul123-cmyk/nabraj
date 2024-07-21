<template>

<section>

<v-container>


<div class="grid grid-cols-1 md:grid-cols-3 md:gap-4  ">
<div v-for="gallery in galleriesStore.galleries" :key="gallery.id" class="aspect-square border border-black  ">

<Nuxt-Link :to="gallery.url">
<v-img :src="gallery.featuredImage" :lazy-src="gallery.featuredImage" class="mb-3"></v-img>

</Nuxt-Link>

<h1 class="text-center">{{gallery.title}}</h1>

</div>
</div>


</v-container>
</section>
 
</template>

<script setup>
import {usegalleriesStore} from "/store/gallery";
const galleriesStore = usegalleriesStore();
</script>

<style lang="scss" scoped>

</style>
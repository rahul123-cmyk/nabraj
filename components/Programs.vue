<template>
    <section class="py-20">
    <v-container>
    <h1 class="mb-4 text-center text-3xl text-blue-500 capitalize font-semibold"> our programs</h1>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="program in programStore.programs" :key="program.id">
 
 <Nuxt-Link :to="`/programs/${program.slug}`">    <v-btn> <h1 class="font-semibold">{{program.title}}</h1></v-btn></Nuxt-Link>
    
    
    </div>
    
    </div>

    
    
    
    </v-container>

    </section>
</template>

<script setup>



import {useprogramsStore} from "~/store/program";
const programStore = useprogramsStore();
</script>

<style lang="scss" scoped>

</style>
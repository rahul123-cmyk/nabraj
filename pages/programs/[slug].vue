<template>
    <section class="py-20">
    <v-container>
    <div class="flex flex-col items-center">
    
    <h1 class="mb-10 text-3xl font-semibold text-center">{{program.title}}</h1>

    <div > <v-img :src="program.image" :lazy-src="program.image" width="900" ></v-img></div>
    <div v-html="program.content"></div>
    
    </div>
    
    
    </v-container>
 
    </section>
</template>

<script setup>


const route =  useRoute();

import {useprogramsStore} from "/store/program";
const programStore = useprogramsStore();

const program = programStore.programs.find((p) => p.slug == route.params.slug);
</script>


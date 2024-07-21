<template>
    <div>
<v-container>
    <v-row>
        <v-col cols="12" lg="4" v-for="gallery in galleriesStore.galleries" :key="gallery.id">
<v-img :src="gallery.featuredImage" :lazy-src="gallery.featuredImage"> </v-img>
        </v-col>
    </v-row>
</v-container>
    </div>
</template>

<script setup>
import { usegalleriesStore } from "~/store/gallery";
const galleriesStore = usegalleriesStore();
// await galleriesStore.getgalleries();
</script>
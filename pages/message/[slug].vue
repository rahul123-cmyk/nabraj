<template>
    <section class="py-20">
    <v-container>
    
    <div class="flex flex-col items-center">
    
    <div>
    
    <v-img :src="message.photo"></v-img>
    <h1>{{message.name}}</h1>
    </div>
    <div v-html="message.message">
    
    
    </div>
    
    </div>
    
    </v-container>

    </section>
</template>

<script setup>
import {usemessagesStore} from "~/store/message";
const messageStore = usemessagesStore();

const route = useRoute();
const  message = messageStore.messages.find((m) => m.slug == route.params.slug);
</script>

<style lang="scss" scoped>

</style>
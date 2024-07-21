<template>
    <div class="  hidden md:block md:flex md:gap-3 " >


    <div>
    <h1 class="text-white"> <v-icon icon="mdi-map-marker"></v-icon> {{profileStore.school.street}}</h1>
    
    </div>

    <div>
    <h1 class="text-white"> <v-icon icon="mdi-email"></v-icon>{{ profileStore.school.email}}</h1>
    </div>

    </div>
</template>

<script setup>
import { useprofileStore  } from "~/store/profile";
const profileStore = useprofileStore();


</script>

<style scoped>

</style>
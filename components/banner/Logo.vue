<template>
    <div>
<v-img :src="profileStore.school.logo" :lazy-src="profileStore.school.logo" width="150"></v-img>
    </div>
</template>

<script setup>


 import { useprofileStore  } from "~/store/profile";
const profileStore = useprofileStore();
</script>


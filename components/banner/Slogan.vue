<template>
    <div>
    <h1 class="text-4xl text-blue-500">{{profileStore.school.name}}</h1>
 <h1 class="italic text-red text-2xl "> {{profileStore.school.slogan}}</h1>
    </div>
</template>

<script setup>

import { useprofileStore  } from "~/store/profile";
const profileStore = useprofileStore();
</script>


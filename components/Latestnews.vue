<template>
    <section>
    <v-container>
   <div class="flex" >

<h1 class="px-5 font-semibold capitalize "> notice:</h1>
<marquee behavior="" direction="">


<div class="flex gap-3 ">

<div v-for="notice in noticeStore.notices" :key="notice.id">

<h1> <v-icon icon="mdi-bullhorn-outline"></v-icon> {{notice.subject}}</h1>
</div>


</div>


</marquee>

   </div>
    
    
    </v-container>

    </section>
</template>

<script setup>

import {  usenoticesStore} from "~/store/notice";
const noticeStore = usenoticesStore();


</script>


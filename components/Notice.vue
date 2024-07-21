<template>
    <section class="py-20">
   <v-container>
<div class="flex  flex-col gap-2 border-l border-l-gray-600 px-3 pb-8">


    <h1 class="mb-2 text-center text-3xl capitalize text-blue">Notice (campus)</h1>


<div class="flex flex-col gap-3 border-b  pb-2 border-b-gray-900">



<div v-for="notice in noticeStore.notices" :key="notice.id">
<div>
<h1>{{notice.subject}}</h1>
</div>
<div>
<h1>{{notice.createdAt}}</h1>
</div>


</div>

</div>

<div class="text-right">
<v-btn> read more</v-btn>
</div>



</div>


   </v-container>
    </section>
</template>

<script setup>
import {usenoticesStore} from "~/store/notice";
const noticeStore = usenoticesStore();

</script>


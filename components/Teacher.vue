<template>
    <section class="py-20 ">
    <v-container>
    
   <div class="grid md:grid-cols-2 gap-5 ">
   
   
    <div v-for="message in messageStore.messages" :key="message.id" class="flex flex-col items-center  gap-2 ">
   
    
   <div   >
   
    <v-img :src="message.photo" :lazy-src="message.photo" width="400"  ></v-img>
    </div>

    <div>
     <h1 class="font-semibold text-center">{{message.designation}}</h1>
     </div>
   
    <div>
    
     <h1 class="text-center">{{message.name}}</h1>
     </div>
     

    <div v-html="message.message">
    </div>

    <div  >
<Nuxt-Link :to="`/message/${message.slug}`">   <v-btn>read more</v-btn></Nuxt-Link>
    
    </div>

    
    
    
    
    </div>
    
    
    </div>
    
    </v-container>

    </section>
</template>

<script setup>
import {usemessagesStore} from "~/store/message";
const messageStore = usemessagesStore();
await messageStore.getmessages();
</script>

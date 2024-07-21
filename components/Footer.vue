<template>
    <section class="bg-blue-200 py-20">
    <v-container>
    
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
    
    <div>
    <h1 class="font-semibold capitalize ">contact us</h1>
    <h1> {{profileStore.school.name}}</h1>
    <h1> {{profileStore.school.street}}</h1>
    <h1> {{profileStore.school.email}}</h1>
    <h1> {{profileStore.school.contactOne}}</h1>
    <div> 
   <h1 class="font-semibold">  office hour </h1>
    <div>
    {{profileStore.school.office_hour}}
    </div>
    
    </div>

    
    </div>


    <div class="flex flex-col ">
    <h1 class="font-semibold capitalize ">quick links</h1>
    <Nuxt-Link to=""> notice</Nuxt-Link>
    <Nuxt-Link to=""> photo gallery</Nuxt-Link>


    
    </div>



    <div>
    <h1 class="font-semibold capitalize ">location</h1>

<div v-html="profileStore.school.map"></div>
    
    </div>
    
    
    </div>
    
    </v-container>

    </section>
</template>

<script setup>


 import { useprofileStore  } from "~/store/profile";
const profileStore = useprofileStore();



</script>


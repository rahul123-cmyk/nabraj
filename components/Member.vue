<template>

<div class="py-20">
<section class="py-10 mb-20 bg-slate-200 ">
    <v-container>
    <h1 class="mb-7 text-center text-4xl capitalize text-blue-400"> {{member.title}}</h1>
   <div class="grid grid-cols-1 md:grid-cols-4 items-center gap-3">
   
    <div v-for="teacher in member.members" :key="teacher.id" class="border hover:shadow-lg " >
    
   <div class="md:w-44" >
   
<div >   
    <v-img :src="teacher.photo " :lazy-src="teacher.photo"  ></v-img></div>
    <h1 class=" font-semibold text-center">{{teacher.name}}</h1>
    <h1 class="font-semibold "> {{teacher.title}}</h1>
    <h1 class="font-semibold"><v-icon icon="mdi-book"></v-icon> {{teacher.designation}}</h1>
    <h1 class="font-semibold"> <v-icon icon="mdi-phone"></v-icon> {{teacher.phone}}</h1>
    <h1 class="font-semibold"> <v-icon icon="mdi-email"></v-icon>{{teacher.email}}</h1>
    </div>
    
    </div>
    
   </div>
    </v-container>

   

    </section>


    <section class="py-20 bg-slate-300">
    
    <v-container>
    
    <div>
    <h1 class="text-4xl text-center text-orange-500 font-semibold capitalize"> {{teacher.title}}</h1>
    
    </div>
    </v-container>
    
    </section>

</div>
    


    
</template>

<script setup>
import {  usemembersStore} from "~/store/member";
const memberStore = usemembersStore();

const member = memberStore.members.find((m) => m.slug == "academic-members-profile");
const teacher = memberStore.members.find((t) => t.slug == "administrative-members-profile" );
</script>


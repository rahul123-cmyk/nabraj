<template>
    <div class="flex items-center gap-2 border-r border-white  px-1">
  
  <div>
  <Nuxt-Link :to="profileStore.school.facebook" target="_blank">
<v-icon icon="mdi-facebook" color="white"></v-icon>
  
    </Nuxt-Link>
  </div>



<div>  
  <Nuxt-Link :to="profileStore.school.youtube" target="_blank">
<v-icon icon="mdi-youtube " color="white"></v-icon>
  
    </Nuxt-Link>
</div>



<div>   
 <Nuxt-Link :to="profileStore.school.linkedin" target="_blank">
<v-icon icon="mdi-linkedin" color="white"></v-icon>
  
    </Nuxt-Link>
    
    
    </div>


    </div>
</template>


<script setup>
 

 import { useprofileStore  } from "~/store/profile";
const profileStore = useprofileStore();

</script>